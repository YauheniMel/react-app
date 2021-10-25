import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import CardUser from '../../../common/CardUser/CardUser';
import style from './SectionUsers.module.scss';
import profilePhotoURL from '../../../assets/images/user_photo.png';
import { useEffect } from 'react';
import Pagination from '../../../common/Pagination/Pagination';
import Spinner from '../../../common/Spinner/Spinner';

export default function SectionUsers({ users, follow, unfollow, getUsers }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState();

  function handleChangePage(num) {
    setIsLoading(false);
    axios.get(`https://jsonplaceholder.typicode.com/posts/${num}/comments`)
    .finally(() => setIsLoading(true))
    .then(response => {
      return response.data.map(item => {
        item.isFriend = false;
        return item;
      });
    })
    .then(arr => {
      getUsers(arr)
    })
    .catch(err => console.error(`Error: ${err}`));
  }

  useEffect(() => {
    handleChangePage(currentPage);
  },[currentPage])

  const list = users.map((user) => {
    return (
      <CardUser
        key={user.id}
        id={user.id}
        name={user.email}
        photo={profilePhotoURL}
        post={user.body}
        isFriend={user.isFriend}
        setFollow={follow}
        setUnfollow={unfollow}
      />
    );
  });

  return (
    <section className={`section_wrap ${style.section}`}>
      {list}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      { isLoading || <Spinner /> }
    </section>
  );
}
