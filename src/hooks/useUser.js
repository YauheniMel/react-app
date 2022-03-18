import { useState } from 'react';

export default function useUser() {
  const getUser = () => {
    const userJSON = sessionStorage.getItem('user');
    const user = JSON.parse(userJSON);
    return user;
  };

  const [user, setUser] = useState(getUser());

  const saveUser = (userInfo) => {
    sessionStorage.setItem('user', JSON.stringify(userInfo));
    setUser(userInfo);
  };

  return {
    setUser: saveUser,
    user
  };
}
