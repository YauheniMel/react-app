import credoReducer from './credo-reducer';
import dialogsReducer from './dialogs-reducer';
import postReducer from './post-reducer';

let store = {
  _state: {
    homePage: {
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
    },
    friendsPage: {
      friends: [
        { firstName: 'Dima', lastName: 'Muller', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '1'},
        { firstName: 'Serg', lastName: 'Melnik', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '2'},
        { firstName: 'Max', lastName: 'Kotov', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '3'},
        { firstName: 'Bill', lastName: 'Smirnov', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '4'},
        { firstName: 'Tom', lastName: 'Ivanov', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '5'},
        { firstName: 'Bob', lastName: 'Miron', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '6'},
        { firstName: 'Tom', lastName: 'Ivanov', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '7'},
        { firstName: 'Bob', lastName: 'Miron', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '8'},
        { firstName: 'Tom', lastName: 'Ivanov', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '9'},
        { firstName: 'Bob', lastName: 'Miron', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '10'},
        { firstName: 'Tom', lastName: 'Ivanov', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '11'},
        { firstName: 'Bob', lastName: 'Miron', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '12'},
      ],
    },
    dialogsPage: {
      persons: [
        { firstName: 'Dima', lastName: 'Muller', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '1'},
        { firstName: 'Serg', lastName: 'Melnik', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '2'},
        { firstName: 'Max', lastName: 'Kotov', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '3'},
        { firstName: 'Bill', lastName: 'Smirnov', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '4'},
        { firstName: 'Tom', lastName: 'Ivanov', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '5'},
        { firstName: 'Bob', lastName: 'Miron', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '6'},
      ],
      messages: [
        { id: '1', content: 'Привет! Как дела? Привет. Нормально. А у тебя? Привет. Нормально. А у тебя?', isMy: true},
        { id: '2', content: 'Привет. Нормально. А у тебя?', isMy: false},
        { id: '3', content: 'Тоже. Что делаешь?', isMy: true},
        { id: '4', content: 'Пойдем играть на улицу.', isMy: false},
        { id: '5', content: 'Ноу', isMy: false},
        { id: '6', content: 'Ну тогда сиди дома', isMy: true},
        { id: '7', content: 'Играю.', isMy: false},
        { id: '8', content: 'НоуПривет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?', isMy: true},
        { id: '9', content: 'Пойдем играть на улицу.', isMy: true},
        { id: '10', content: 'НоуПривет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?', isMy: true},
      ],
      messageContent: '',
    },
    photosPage: {
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
  },
  getState() {
    return this._state;
  },
  _rerenderReactDom() {},
  reassignMethod(func) {
    this._rerenderReactDom = func;
  },
  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.homePage = postReducer(this._state.homePage, action);
    this._state.homePage = credoReducer(this._state.homePage, action);

    this._rerenderReactDom(this);
  },
  _createCredo(content) {
    this._state.homePage.credoContent = content;

    this._rerenderReactDom(this);
  }
}

export default store;
