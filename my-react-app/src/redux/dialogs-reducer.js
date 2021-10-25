export function sendMessage() {
  return (
    {
      type: 'SEND-MESSAGE',
    }
  );
}

export function createMessage(content) {
  return (
    {
      type: 'CREATE-MESSAGE',
      content: content,
    }
  );
}

const initState = {
  persons: [
    {
      firstName: 'Dima',
      lastName: 'Muller',
      photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg',
      id: '1',
    },
    {
      firstName: 'Serg',
      lastName: 'Melnik',
      photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg',
      id: '2',
    },
    {
      firstName: 'Max',
      lastName: 'Kotov',
      photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg',
      id: '3',
    },
    {
      firstName: 'Bill',
      lastName: 'Smirnov',
      photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg',
      id: '4',
    },
    {
      firstName: 'Tom',
      lastName: 'Ivanov',
      photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg',
      id: '5',
    },
    {
      firstName: 'Bob',
      lastName: 'Miron',
      photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg',
      id: '6',
    },
  ],
  messages: [
    {
      id: '1',
      content: 'Привет! Как дела? Привет. Нормально. А у тебя? Привет. Нормально. А у тебя?',
      isMy: true,
    },
    { id: '2', content: 'Привет. Нормально. А у тебя?', isMy: false },
    { id: '3', content: 'Тоже. Что делаешь?', isMy: true },
    { id: '4', content: 'Пойдем играть на улицу.', isMy: false },
    { id: '5', content: 'Ноу', isMy: false },
    { id: '6', content: 'Ну тогда сиди дома', isMy: true },
    { id: '7', content: 'Играю.', isMy: false },
    {
      id: '8',
      content:
        'НоуПривет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?',
      isMy: true,
    },
    { id: '9', content: 'Пойдем играть на улицу.', isMy: true },
    {
      id: '10',
      content:
        'НоуПривет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?',
      isMy: true,
    },
  ],
  messageContent: '',
};


function dialogsReducer(state = initState, action) {
  switch(action.type) {
    case 'SEND-MESSAGE': {
      const newMessage = {
        id: +new Date(),
        content: state.messageContent,
        isMy: true,
      }

      const stateCopy = {
        ...state,
        messages: [...state.messages, newMessage]
      }

      stateCopy.messageContent = '';

      return stateCopy;
    }
    case 'CREATE-MESSAGE': {
      const stateCopy = {...state};
      stateCopy.messageContent = action.content;

      return stateCopy;
    }
    default:
      return state;
  }
}

export default dialogsReducer;
