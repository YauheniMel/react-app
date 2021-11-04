export function getPhotos(arr) {
  return {
    type: 'GET-PHOTOS',
    content: arr,
  };
}

export function getTargetPhoto(obj) {
  return {
    type: 'GET-TARGET-PHOTO',
    content: obj,
  };
}

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
