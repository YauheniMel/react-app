import { requestAPI } from '../api/api';

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
export const setIsFetching = (value) => ({
  type: 'SET-IS-FETCHING',
  content: value,
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
  isFetching: false,
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
    case 'SET-IS-FETCHING': {
      const stateCopy = {
        ...state,
        isFetching: state.content,
      };

      return stateCopy;
    }
    default:
      return state;
  }
}

export const getUser = (id) => (dispatch) => {
  dispatch(setIsFetching(true));

  requestAPI
    .getPhotos(id)
    .then((data) => {
      dispatch(getPhotos(data));

      dispatch(setIsFetching(false));
    })
    .catch((err) => {
      console.error(err);

      dispatch(setIsFetching(false));
    });
};

export default homeReducer;
