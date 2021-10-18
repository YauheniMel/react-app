import React from 'react';

export const languages = {
  off: {
    header: {
      language: 'Выберите язык',
      theme: 'Выбрать тему',
    },
    sidebar: {
      home: 'Главная',
      dialogs: 'Диалоги',
      myFriends: 'Мои друзья',
      photos: 'Фото',
      settings: 'Настройки'
    },
    desk: {
      credo: 'Мое кредо:',
      post: 'Мой пост:'
    }
  },
  on: {
    header: {
      language: 'Select language',
      theme: 'Select theme',
    },
    sidebar: {
      home: 'Home',
      dialogs: 'Dialogs',
      myFriends: 'My friend',
      photos: 'Photos',
      settings: 'Settings'
    },
    desk: {
      credo: 'My credo:',
      post: 'My post:'
    }
  }
}

export const LinguaContext = React.createContext();
