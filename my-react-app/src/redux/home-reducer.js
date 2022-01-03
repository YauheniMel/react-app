export const createCredoContent = (content) => ({
  type: 'CREATE-CREDO-CONTENT',
  content,
});
export const createPostContent = (content) => ({
  type: 'CREATE-POST-CONTENT',
  content,
});
export const setCredoContent = () => ({ type: 'SET-CREDO-CONTENT' });
export const setPostContent = () => ({ type: 'SET-POST-CONTENT' });
export const getPhotos = (content) => ({
  type: 'GET-PHOTOS',
  content,
});

const initState = {
  firstName: '',
  lastName: '',
  date: '',
  postContent: '',
  credoContent: '',
  initCredo: '',
  initPost: '',
  photos: [],
};

function homeReducer(state = initState, action) {
  switch (action.type) {
    case 'CREATE-CREDO-CONTENT': {
      const stateCopy = { ...state };
      stateCopy.initCredo = action.content;
      return stateCopy;
    }
    case 'CREATE-POST-CONTENT': {
      const stateCopy = { ...state };
      stateCopy.initPost = action.content;
      return stateCopy;
    }
    case 'SET-CREDO-CONTENT': {
      const stateCopy = { ...state };
      stateCopy.credoContent = state.initCredo;
      stateCopy.initCredo = '';
      return stateCopy;
    }
    case 'SET-POST-CONTENT': {
      const stateCopy = { ...state };
      stateCopy.postContent = state.initPost;
      stateCopy.initPost = '';
      return stateCopy;
    }
    case 'GET-PHOTOS': {
      const stateCopy = { ...state };
      stateCopy.photos = [...action.content];

      return stateCopy;
    }
    default:
      return state;
  }
}

export default homeReducer;
