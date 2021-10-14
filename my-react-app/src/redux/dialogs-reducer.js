export function sendMessageCreator() {
  return (
    {
      type: 'SEND-MESSAGE',
    }
  );
}

export function addMessageContent(content) {
  return (
    {
      type: 'ADD-MESSAGE-CONTENT',
      content: content,
    }
  );
}

function dialogsReducer(state, action) {
  switch(action.type) {
    case 'SEND-MESSAGE':
      const newMessage = {
        id: +new Date(),
        content: state.messageContent,
        isMy: true,
      }

      state.messages.push(newMessage);

      state.messageContent = '';

      return state;
    case 'ADD-MESSAGE-CONTENT':
      state.messageContent = action.content;

      return state;
    default:
      return state;
  }
}

export default dialogsReducer;
