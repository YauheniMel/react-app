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

const initState = {
  firstName: 'Yauheni',
  lastName: 'Melnik',
  date: '29.06.1991',
  postContent: 'play guitar',
  credoContent: 'always work on yourself',
  initPost: '',
  initCredo: '',
  photos: [
    {
      id: 1,
      url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg',
    },
    {
      id: 2,
      url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg',
    },
    {
      id: 3,
      url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg',
    },
    {
      id: 4,
      url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg',
    },
    {
      id: 5,
      url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg',
    },
    {
      id: 6,
      url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg',
    },
    {
      id: 7,
      url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg',
    },
    {
      id: 8,
      url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg',
    },
    {
      id: 9,
      url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg',
    },
    {
      id: 10,
      url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg',
    },
    {
      id: 11,
      url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg',
    },
    {
      id: 12,
      url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg',
    },
  ],
};

function homeReducer(state = initState, action) {
  switch (action.type) {
    case 'CREATE-CREDO-CONTENT': {
      const stateCopy = {...state};
      stateCopy.initCredo = action.content;
      return stateCopy;
    }
    case 'CREATE-POST-CONTENT': {
      const stateCopy = {...state};
      stateCopy.initPost = action.content;
      return stateCopy;
    }
    case 'SET-CREDO-CONTENT': {
      const stateCopy = {...state};
      stateCopy.credoContent = state.initCredo;
      stateCopy.initCredo = '';
      return stateCopy;
    }
    case 'SET-POST-CONTENT': {
      const stateCopy = {...state};
      stateCopy.postContent = state.initPost;
      stateCopy.initPost = '';
      return stateCopy;
    }
    default:
      return state;
  }
}

export default homeReducer;
