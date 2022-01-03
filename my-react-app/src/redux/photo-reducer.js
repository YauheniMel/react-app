export const getPhotos = (content) => ({
  type: 'GET-PHOTOS',
  content,
});
export const getTargetPhoto = (content) => ({
  type: 'GET-TARGET-PHOTO',
  content,
});

const initState = {
  photos: [],
  targetPhoto: {},
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

export default photoReducer;
