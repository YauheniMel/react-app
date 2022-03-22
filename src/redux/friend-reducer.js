import { requestAPI } from '../api/api';

export const getFriends = (content) => ({
  type: 'GET-FRIENDS',
  content
});
export const getTargetFriend = (content) => ({
  type: 'GET-TARGET-FRIEND',
  content
});
export const setIsFetching = (value) => ({
  type: 'SET-IS-FETCHING',
  content: value
});
export const setCurrentFriendPage = (numPage) => ({
  type: 'SET-CURRENT-FRIEND-PAGE',
  content: numPage
});

const initState = {
  friends: [],
  targetFriend: {},
  totalPages: 0,
  currentPage: 1,
  isFetching: false
};

function friendReducer(state = initState, action) {
  switch (action.type) {
    case 'GET-FRIENDS': {
      const stateCopy = {
        ...state,
        friends: [...action.content.data],
        totalPages: action.content.totalPages
      };

      return stateCopy;
    }
    case 'GET-TARGET-FRIEND': {
      const stateCopy = {
        ...state,
        targetFriend: { ...action.content }
      };

      return stateCopy;
    }
    case 'SET-IS-FETCHING': {
      const stateCopy = {
        ...state,
        isFetching: action.content
      };

      return stateCopy;
    }
    case 'SET-CURRENT-FRIEND-PAGE': {
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

export const getTargetFriends = (id, currentPage) => (dispatch) => {
  // need refactor names
  dispatch(setIsFetching(true));

  requestAPI
    .getFriends(id, currentPage)
    .then((data) => dispatch(getFriends(data)))
    .catch((err) => console.error(err))
    .finally(() => dispatch(setIsFetching(false)));
};

export default friendReducer;
