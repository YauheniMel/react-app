export function followUser(id) {
  return {
    type: 'FOLLOW-USER',
    id: id,
  }
}

export function unFollowUser(id) {
  return {
    type: 'UNFOLLOW-USER',
    id: id,
  }
}

export function getUsers(arr) {
  return {
    type: 'GET-USERS',
    users: arr,
  }
}

const initState = {
  users: [],
};

function usersReducer(state = initState, action) {
  switch (action.type) {
    case 'FOLLOW-USER': {
      const stateCopy = {
        ...state,
        users: [...state.users]
      };
      stateCopy.users = state.users.map(item => {
        if(item.id === action.id) {
          item.isFriend = true;
          return item;
        }
        return item;
      })

      return stateCopy;
    }
    case 'UNFOLLOW-USER': {
      const stateCopy = {
        ...state,
        users: [...state.users]
      };
      stateCopy.users = state.users.map(item => {
        if(item.id === action.id) {
          item.isFriend = false;
          return item;
        }
        return item;
      })

      console.log(stateCopy);

      return stateCopy;
    }
    case 'GET-USERS': {
      const stateCopy = {
        ...state,
        users: [...action.users]
      }

      return stateCopy;
    }
    default:
      return state;
  }
}

export default usersReducer;
