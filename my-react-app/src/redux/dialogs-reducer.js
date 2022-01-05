import { requestAPI } from '../api/api';

export const sendMessage = () => ({ type: 'SEND-MESSAGE' });
export const createMessage = (content) => ({
  type: 'CREATE-MESSAGE',
  content,
});
export const getDialogPersons = (content) => ({
  type: 'GET-DIALOG-PERSONS',
  content,
});
export const setIsFetching = (value) => ({
  type: 'SET-IS-FETCHING',
  content: value,
});

const initState = {
  persons: [],
  messages: [],
  messageContent: '',
  isFetching: false,
};

function dialogsReducer(state = initState, action) {
  switch (action.type) {
    case 'SEND-MESSAGE': {
      const newMessage = {
        id: +new Date(),
        content: state.messageContent,
        isMy: true,
      };

      const stateCopy = {
        ...state,
        messages: [...state.messages, newMessage],
      };

      stateCopy.messageContent = '';

      return stateCopy;
    }
    case 'CREATE-MESSAGE': {
      const stateCopy = { ...state };
      stateCopy.messageContent = action.content;

      return stateCopy;
    }
    case 'GET-DIALOG-PERSONS': {
      const stateCopy = {
        ...state,
        persons: [...action.content],
      };

      return stateCopy;
    }
    case 'SET-IS-FETCHING': {
      const stateCopy = {
        ...state,
        isFetching: action.content,
      };

      return stateCopy;
    }
    default:
      return state;
  }
}

export const getPersons = (id) => (dispatch) => {
  dispatch(setIsFetching(true));

  requestAPI
    .getDialogPersons(id)
    .then((data) => {
      dispatch(getDialogPersons(data));

      dispatch(setIsFetching(false));
    })
    .catch((err) => {
      console.error(err);

      dispatch(setIsFetching(false));
    });
};

export default dialogsReducer;
