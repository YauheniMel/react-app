export function addPostContent(content) {
  return (
    {
      type: 'ADD-POST-CONTENT',
      content: content,
    }
  );
}

function postReducer(state, action) {
  switch(action.type) {
    case 'ADD-POST-CONTENT':
      state.postContent = action.content;
      return state;
    default:
      return state;
  }
}

export default postReducer;
