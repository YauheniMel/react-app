import { useEffect, useState } from 'react';
import SectionUsers from './SectionUsers';
import axios from 'axios';

export default function SectionUsersAPIContainer({
  users,
  follow,
  unfollow,
  getUsers,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState();

  function handleChangePage(num) {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${num}/comments`)
      .finally(() => setIsLoading(false))
      .then((response) => {
        return response.data.map((item) => {
          item.isFriend = false;
          return item;
        });
      })
      .then((arr) => {
        getUsers(arr);
      })
      .catch((err) => console.error(`Error: ${err}`));
  }

  useEffect(() => {
    handleChangePage(currentPage);
  }, [currentPage]);

  return (
    <SectionUsers
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      isLoading={isLoading}
      users={users}
      follow={follow}
      unfollow={unfollow}
    />
  );
}
