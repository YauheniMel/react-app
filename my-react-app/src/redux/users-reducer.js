export const followUser = (id) => ({
  type: 'FOLLOW-USER',
  id,
});
export const unFollowUser = (id) => ({
  type: 'UNFOLLOW-USER',
  id,
});
export const getUsers = (content) => ({
  type: 'GET-USERS',
  content,
});
export const getTargetUser = (content) => ({
  type: 'GET-TARGET-USER',
  content,
});

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

      return stateCopy;
    }
    case 'GET-USERS': {
      const stateCopy = {
        ...state,
        users: [...action.content],
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
