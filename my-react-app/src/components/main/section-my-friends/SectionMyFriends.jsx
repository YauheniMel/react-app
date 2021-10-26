import { useState } from 'react';
import Friend from './friend/Friend';
import style from './SectionMyFriends.module.scss';
import axios from 'axios';
import Pagination from '../../../common/Pagination/Pagination';
import Spinner from '../../../common/Spinner/Spinner';
import { useEffect } from 'react';
import photoURL from '../../../assets/images/user_photo.png';
export default function SectionMyFriends({ friends, getFriends }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState();

  function handleChangePage(num) {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${num}/comments`)
      .then((response) => response.data)
      .then((data) => {
        data = data.map((item) => {
          item.photoURL = photoURL;
          return item;
        });
        getFriends(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    handleChangePage(currentPage);
  }, [currentPage]);

  const friendList = friends.map((friend) => {
    return (
      <Friend key={friend.id} name={friend.email} photoURL={friend.photoURL} />
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
