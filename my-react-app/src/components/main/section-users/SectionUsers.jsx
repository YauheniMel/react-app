import React from 'react';
import CardUser from '../../../common/CardUser/CardUser';
import style from './SectionUsers.module.scss';
import Pagination from '../../../common/Pagination/Pagination';
import Spinner from '../../../common/Spinner/Spinner';

export default function SectionUsers({
  users,
  follow,
  unfollow,
  currentPage,
  setCurrentPage,
  isLoading,
}) {
  const list = users.map((user) => {
    return (
      <CardUser
        key={user.id}
        id={user.id}
        firstName={user.firstName}
        lastName={user.lastName}
        photo={user.photo}
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
      {isLoading && <Spinner />}
    </section>
  );
}
