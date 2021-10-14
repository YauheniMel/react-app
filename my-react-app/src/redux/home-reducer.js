export function addCredoContent(content) {
  return (
    {
      type: 'ADD-CREDO-CONTENT',
      content: content,
    }
  );
}

export function addPostContent(content) {
  return (
    {
      type: 'ADD-POST-CONTENT',
      content: content,
    }
  );
}


const initState = {
  firstName: 'Yauheni',
  lastName: 'Melnik',
  date: '29.06.1991',
  postContent: 'play guitar',
  credoContent: 'always work on yourself',
  photos: [
    { id: 1, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 2, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 3, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 4, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 5, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 6, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 7, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 8, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 9, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 10, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 11, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 12, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
  ],
}

function homeReducer(state = initState, action) {
  switch(action.type) {
    case 'ADD-CREDO-CONTENT':
      state.credoContent = action.content;
      return state;
    case 'ADD-POST-CONTENT':
        state.postContent = action.content;
        return state;
    default:
      return state;
  }
}

export default homeReducer;
