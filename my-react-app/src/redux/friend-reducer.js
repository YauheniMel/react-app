export const getFriends = (content) => ({
  type: 'GET-FRIENDS',
  content,
});
export const getTargetFriend = (content) => ({
  type: 'GET-TARGET-FRIEND',
  content,
});

const initState = {
  friends: [],
  targetFriend: {},
};

function friendReducer(state = initState, action) {
  switch (action.type) {
    case 'GET-FRIENDS': {
      const stateCopy = {
        ...state,
        friends: [...action.content],
      };
      return stateCopy;
    }
    case 'GET-TARGET-FRIEND': {
      const stateCopy = {
        ...state,
        targetFriend: { ...action.content },
      };
      return stateCopy;
    }
  }
  return state;
}

export default friendReducer;
