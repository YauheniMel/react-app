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

const initState = {
  friends: [],
  targetFriend: {},
  isFetching: false
};

function friendReducer(state = initState, action) {
  switch (action.type) {
    case 'GET-FRIENDS': {
      const stateCopy = {
        ...state,
        friends: [...action.content]
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
  }
  return state;
}

export const getAllFriends = (id, currentPage) => (dispatch) => {
  // need refactor names
  dispatch(setIsFetching(true));

  requestAPI
    .getFriends(id, currentPage)
    .then((data) => {
      dispatch(getFriends(data));

      dispatch(setIsFetching(false));
    })
    .catch((err) => {
      console.error(err);

      dispatch(setIsFetching(false));
    });
};

export default friendReducer;