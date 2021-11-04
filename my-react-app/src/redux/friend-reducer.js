export function getFriends(arr) {
  return {
    type: 'GET-FRIENDS',
    content: arr,
  };
}

export function getTargetFriend(obj) {
  return {
    type: 'GET-TARGET-FRIEND',
    content: obj,
  };
}

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
