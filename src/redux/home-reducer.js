import { requestAPI } from '../api/api';

export const getPhotos = (content) => ({
  type: 'GET-PHOTOS',
  content
});
export const setIsFetching = (value) => ({
  type: 'SET-IS-FETCHING',
  content: value
});

const initState = {
  firstName: '',
  lastName: '',
  date: '',
  photos: [],
  isFetching: false
};

function homeReducer(state = initState, action) {
  switch (action.type) {
    case 'GET-PHOTOS': {
      const stateCopy = { ...state };
      stateCopy.photos = [...action.content];

      return stateCopy;
    }
    case 'SET-IS-FETCHING': {
      const stateCopy = {
        ...state,
        isFetching: state.content
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
    .then((data) => dispatch(getPhotos(data)))
    .catch((err) => console.error(err))
    .finally(() => dispatch(setIsFetching(false)));
};

export default homeReducer;
