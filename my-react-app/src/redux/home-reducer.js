export function createCredoContent(content) {
  return {
    type: 'CREATE-CREDO-CONTENT',
    content: content,
  };
}

export function createPostContent(content) {
  return {
    type: 'CREATE-POST-CONTENT',
    content: content,
  };
}

export function setCredoContent() {
  return {
    type: 'SET-CREDO-CONTENT',
  };
}

export function setPostContent() {
  return {
    type: 'SET-POST-CONTENT',
  };
}

export function getPhotos(arr) {
  return {
    type: 'GET-PHOTOS',
    content: arr,
  };
}

const initState = {
  firstName: 'Yauheni',
  lastName: 'Melnik',
  date: '29.06.1991',
  postContent: 'play guitar',
  credoContent: 'always work on yourself',
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
      const stateCopy = {
        ...state,
        photos: [...action.content],
      };
      return stateCopy;
    }
    default:
      return state;
  }
}

export default homeReducer;
