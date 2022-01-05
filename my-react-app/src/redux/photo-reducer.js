import { requestAPI } from '../api/api';

export const getPhotos = (content) => ({
  type: 'GET-PHOTOS',
  content,
});
export const getTargetPhoto = (content) => ({
  type: 'GET-TARGET-PHOTO',
  content,
});
export const setIsFetching = (value) => ({
  type: 'SET-IS-FETCHING',
  content: value,
});

const initState = {
  photos: [],
  targetPhoto: {},
  isFetching: false,
};

function photoReducer(state = initState, action) {
  switch (action.type) {
    case 'GET-PHOTOS': {
      const stateCopy = {
        ...state,
        photos: [...action.content],
      };

      return stateCopy;
    }
    case 'GET-TARGET-PHOTO': {
      const stateCopy = {
        ...state,
        targetPhoto: { ...action.content },
      };

      return stateCopy;
    }
  }

  return state;
}

export const getAllPhotos = (id, currentPage) => (dispatch) => {
  dispatch(setIsFetching(true));

  requestAPI
    .getPhotos(id, currentPage)
    .then((data) => {
      dispatch(getPhotos(data));

      dispatch(setIsFetching(false));
    })
    .catch((err) => {
      console.error(err);

      dispatch(setIsFetching(false));
    });
};

export default photoReducer;
