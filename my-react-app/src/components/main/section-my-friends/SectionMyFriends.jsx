import { useState } from 'react';
import Friend from './friend/Friend';
import style from './SectionMyFriends.module.scss';
import axios from 'axios';
import Pagination from '../../../common/Pagination/Pagination';
import Spinner from '../../../common/Spinner/Spinner';
import { useEffect } from 'react';
export default function SectionMyFriends({ friends, getFriends }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState();

  function handleChangePage(num) {
    setIsLoading(true);
    axios
      .get('/friends')
      .then((response) => response.data)
      .then((data) => getFriends(data))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    handleChangePage(currentPage);
  }, [currentPage]);

  const friendList = friends.map((friend) => {
    return (
      <Friend
        key={friend.id}
        firstName={friend.firstName}
        lastName={friend.lastName}
        photoURL={friend.photo}
      />
    );
  });

  return (
    <section className={`section_wrap ${style.section}`}>
      {friendList}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {isLoading && <Spinner />}
    </section>
  );
}
