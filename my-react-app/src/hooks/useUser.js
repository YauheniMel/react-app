import { useState } from 'react';

export default function useUser() {
  const getUser = () => {
    const userJSON = sessionStorage.getItem('user');
    const user = JSON.parse(userJSON);
    return user;
  };
  const [user, setUser] = useState(getUser());

  const saveUser = (userUser) => {
    sessionStorage.setItem('user', JSON.stringify(userUser));
    setUser(userUser);
  };

  return {
    setUser: saveUser,
    user,
  };
}
