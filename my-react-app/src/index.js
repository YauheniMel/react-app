import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const resMessages = [
  { id: '1', content: 'Привет! Как дела? Привет. Нормально. А у тебя? Привет. Нормально. А у тебя?', isMy: true},
  { id: '2', content: 'Привет. Нормально. А у тебя?', isMy: false},
  { id: '3', content: 'Тоже. Что делаешь?', isMy: true},
  { id: '4', content: 'Пойдем играть на улицу.', isMy: false},
  { id: '5', content: 'Ноу', isMy: false},
  { id: '6', content: 'Ну тогда сиди дома', isMy: true},
  { id: '7', content: 'Играю.', isMy: false},
  { id: '8', content: 'НоуПривет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?', isMy: true},
  { id: '9', content: 'Пойдем играть на улицу.', isMy: true},
];

const resPerson = [
  { firstName: 'Dima', lastName: 'Muller', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '1'},
  { firstName: 'Serg', lastName: 'Melnik', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '2'},
  { firstName: 'Max', lastName: 'Kotov', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '3'},
  { firstName: 'Bill', lastName: 'Smirnov', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '4'},
  { firstName: 'Tom', lastName: 'Ivanov', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '5'},
  { firstName: 'Bob', lastName: 'Miron', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '6'},
];

const resPhotos = [
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
];

const data = [resMessages, resPerson, resPhotos];

ReactDOM.render(
  <React.StrictMode>
    <App data={ data } />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
