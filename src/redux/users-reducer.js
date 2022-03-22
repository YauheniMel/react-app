import { requestAPI } from '../api/api';

export const followUser = (id) => ({
  type: 'FOLLOW-USER',
  id
});
export const unFollowUser = (id) => ({
  type: 'UNFOLLOW-USER',
  id
});
export const getUsers = (content) => ({
  type: 'GET-USERS',
  content
});
export const getTargetUser = (content) => ({
  type: 'GET-TARGET-USER',
  content
});
export const usersIsFetching = (content) => ({
  type: 'USERS-IS-FETCHING',
  content: content
});
export const toggleIsFollowing = (isActive, id) => ({
  type: 'TOGGLE-IS-FOLLOWING',
  isActive: isActive,
  id: id
});
export const setCurrentUserPage = (numPage) => ({
  type: 'SET-CURRENT-USER-PAGE',
  content: numPage
});

const initState = {
  users: [],
  targetUser: {},
  isFetching: false,
  totalPages: 0,
  currentPage: 1,
  followingInProgress: []
};

function usersReducer(state = initState, action) {
  switch (action.type) {
    case 'FOLLOW-USER': {
      const stateCopy = {
        ...state,
        users: [...state.users]
      };

      stateCopy.users = state.users.map((item) => {
        if (item.id === action.id) {
          item.isFriend = true;
          return item;
        }
        return item;
      });

      return stateCopy;
    }
    case 'UNFOLLOW-USER': {
      const stateCopy = {
        ...state,
        users: [...state.users]
      };
      stateCopy.users = state.users.map((item) => {
        if (item.id === action.id) {
          item.isFriend = false;
          return item;
        }
        return item;
      });

      return stateCopy;
    }
    case 'GET-USERS': {
      const stateCopy = {
        ...state,
        users: [...action.content.data],
        totalPages: action.content.totalPages
      };

      return stateCopy;
    }
    case 'GET-TARGET-USER': {
      const stateCopy = {
        ...state,
        targetUser: { ...action.content }
      };

      return stateCopy;
    }
    case 'USERS-IS-FETCHING': {
      const stateCopy = {
        ...state,
        isFetching: action.content
      };

      return stateCopy;
    }
    case 'TOGGLE-IS-FOLLOWING': {
      const stateCopy = {
        ...state,
        followingInProgress: action.isActive
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter((item) => item != action.id)
      };

      return stateCopy;
    }
    case 'SET-CURRENT-USER-PAGE': {
      const stateCopy = {
        ...state,
        currentPage: action.content
      };

      return stateCopy;
    }
    default:
      return state;
  }
}

export const getTargetUsers = (id, currentPage) => (dispatch) => {
  dispatch(usersIsFetching(true));

  requestAPI
    .getUsers(id, currentPage)
    .then((data) => dispatch(getUsers(data)))
    .catch((err) => console.error(err))
    .finally(() => dispatch(usersIsFetching(false)));
};

export const unfollow = (id, userId) => (dispatch) => {
  dispatch(toggleIsFollowing(true, userId));

  requestAPI
    .delFriend(id, userId)
    .then(() => dispatch(unFollowUser(userId)))
    .catch((err) => console.error(err))
    .finally(() => dispatch(toggleIsFollowing(false, userId)));
};

export const follow = (id, userId) => (dispatch) => {
  dispatch(toggleIsFollowing(true, userId));

  requestAPI
    .addFriend(id, userId)
    .then(() => dispatch(followUser(userId)))
    .catch((err) => console.error(err))
    .finally(() => dispatch(toggleIsFollowing(false, userId)));
};

export default usersReducer;
