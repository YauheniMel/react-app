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

const initState = {
  users: [],
  targetUser: {},
  isFetching: false,
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
        users: [...action.content]
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
    default:
      return state;
  }
}

export const getAllUsers = (id, currentPage) => (dispatch) => {
  dispatch(usersIsFetching(true));

  requestAPI
    .getUsers(id, currentPage)
    .then((data) => {
      dispatch(getUsers(data));

      dispatch(usersIsFetching(false));
    })
    .catch((err) => {
      console.error(err);

      dispatch(usersIsFetching(false));
    });
};

export const unfollow = (id, userId) => (dispatch) => {
  dispatch(toggleIsFollowing(true, userId));

  requestAPI
    .delFriend(id, userId)
    .then(() => {
      dispatch(unFollowUser(userId));

      dispatch(toggleIsFollowing(false, userId));
    })
    .catch((err) => {
      console.error(err);

      dispatch(toggleIsFollowing(false, userId));
    });
};

export const follow = (id, userId) => (dispatch) => {
  dispatch(toggleIsFollowing(true, userId));

  requestAPI
    .addFriend(id, userId)
    .then(() => {
      dispatch(followUser(userId));

      dispatch(toggleIsFollowing(false, userId));
    })
    .catch((err) => {
      console.error(err);

      dispatch(toggleIsFollowing(false, userId));
    });
};

export default usersReducer;
