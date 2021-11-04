export function followUser(id) {
  return {
    type: 'FOLLOW-USER',
    id: id,
  };
}

export function unFollowUser(id) {
  return {
    type: 'UNFOLLOW-USER',
    id: id,
  };
}

export function getUsers(arr) {
  return {
    type: 'GET-USERS',
    users: arr,
  };
}

export function getTargetUser(obj) {
  return {
    type: 'GET-TARGET-USER',
    targetUser: obj,
  };
}

const initState = {
  users: [],
  targetUser: {},
};

function usersReducer(state = initState, action) {
  switch (action.type) {
    case 'FOLLOW-USER': {
      const stateCopy = {
        ...state,
        users: [...state.users],
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
        users: [...state.users],
      };
      stateCopy.users = state.users.map((item) => {
        if (item.id === action.id) {
          item.isFriend = false;
          return item;
        }
        return item;
      });

      console.log(stateCopy);

      return stateCopy;
    }
    case 'GET-USERS': {
      const stateCopy = {
        ...state,
        users: [...action.users],
      };

      return stateCopy;
    }
    case 'GET-TARGET-USER': {
      const stateCopy = {
        ...state,
        targetUser: { ...action.targetUser },
      };

      return stateCopy;
    }
    default:
      return state;
  }
}

export default usersReducer;
