import React from 'react';
import CardUser from '../../../common/CardUser/CardUser';
import style from './SectionUsers.module.scss';
import Pagination from '../../../common/Pagination/Pagination';
import Spinner from '../../../common/Spinner/Spinner';
import { TargetUserContainer } from './TargetUser/TargetUserContainer';
import Link from '../../../common/Link/Link';

export default function SectionUsers({
  users,
  follow,
  unfollow,
  currentPage,
  setCurrentPage,
  isFetching,
  match,
  followingInProgress,
}) {
  const list = users.map((user) => {
    return (
      // <Link key={user.id} path={`/users/${user.id}`}>
      <CardUser
        userId={user.id}
        key={user.id}
        firstName={user.firstName}
        lastName={user.lastName}
        photo={user.avatar}
        isFriend={user.isFriend} // state changed
        setFollow={follow}
        setUnfollow={unfollow}
        followingInProgress={followingInProgress}
      />
      // </Link>
    );
  });

  return (
    <section className={`section_wrap ${style.section}`}>
      <TargetUserContainer match={match} />
      <div className={style.users}>{list}</div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {isFetching && <Spinner />}
    </section>
  );
}
