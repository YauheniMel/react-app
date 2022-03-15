import React from 'react';

export const languages = {
  off: {
    header: {
      language: 'Выберите язык',
      theme: 'Выбрать тему'
    },
    sidebar: {
      home: 'Главная',
      dialogs: 'Диалоги',
      myFriends: 'Мои друзья',
      photos: 'Фото',
      settings: 'Настройки',
      users: 'Пользователи'
    },
    desk: {
      credo: 'Мое кредо:',
      post: 'Мой пост:'
    },
    redactorDialog: {
      send: 'Отправить',
      cancel: 'Отмена'
    },
    usersCard: {
      follow: 'Дружить',
      unfollow: 'Не дружить'
    }
  },
  on: {
    header: {
      language: 'Select language',
      theme: 'Select theme'
    },
    sidebar: {
      home: 'Home',
      dialogs: 'Dialogs',
      myFriends: 'My friend',
      photos: 'Photos',
      settings: 'Settings',
      users: 'Users'
    },
    desk: {
      credo: 'My credo:',
      post: 'My post:'
    },
    redactorDialog: {
      send: 'Send',
      cancel: 'Cancel'
    },
    usersCard: {
      follow: 'Follow',
      unfollow: 'Unfollow'
    }
  }
};

export const LinguaContext = React.createContext();
