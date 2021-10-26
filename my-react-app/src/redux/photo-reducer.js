export function getPhotos(arr) {
  return {
    type: 'GET-PHOTOS',
    content: arr,
  };
}

const initState = {
  photos: [],
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
  }
  return state;
}

export default photoReducer;
