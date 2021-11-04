export function sendMessage() {
  return {
    type: 'SEND-MESSAGE',
  };
}

export function createMessage(content) {
  return {
    type: 'CREATE-MESSAGE',
    content: content,
  };
}

export function getDialogs(obj) {
  return {
    type: 'GET-DIALOGS',
    content: obj,
  };
}

const initState = {
  persons: [],
  messages: [],
  messageContent: '',
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
    case 'GET-DIALOGS': {
      const stateCopy = {
        ...state,
        persons: [...action.content.persons],
        messages: [...action.content.messages],
      };
      stateCopy.messageContent = action.content;

      return stateCopy;
    }
    default:
      return state;
  }
}

export default dialogsReducer;
