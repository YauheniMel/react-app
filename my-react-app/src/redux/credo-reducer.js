export function addCredoContent(content) {
  return (
    {
      type: 'ADD-CREDO-CONTENT',
      content: content,
    }
  );
}

function credoReducer(state, action) {
  switch(action.type) {
    case 'ADD-CREDO-CONTENT':
      state.credoContent = action.content;
      return state;
    default:
      return state;
  }
}

export default credoReducer;
