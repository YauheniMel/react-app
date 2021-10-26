export function getFriends(arr) {
  return {
    type: 'GET-FRIENDS',
    content: arr,
  };
}

const initState = {
  friends: [],
};

function friendReducer(state = initState, action) {
  switch (action.type) {
    case 'GET-FRIENDS': {
      const stateCopy = {
        ...state,
        friends: [...action.content],
      };
      console.log(stateCopy);
      return stateCopy;
    }
  }
  return state;
}

export default friendReducer;
