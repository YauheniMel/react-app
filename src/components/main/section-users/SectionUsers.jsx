import React from 'react';
import CardUser from '../../../common/CardUser/CardUser';
import Pagination from '../../../common/Pagination/Pagination';
import Spinner from '../../../common/Spinner/Spinner';
import { TargetUserContainer } from './TargetUser/TargetUserContainer';
import { NavLink } from 'react-router-dom';

export default function SectionUsers({
  users,
  follow,
  unfollow,
  currentPage,
  setCurrentPage,
  isFetching,
  match,
  followingInProgress
}) {
  const list = users.map((user) => {
    return (
      <NavLink key={user.id} to={`/users/${user.id}`}>
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
      </NavLink>
    );
  });

  return (
    <section className="section">
      <TargetUserContainer match={match} />
      <div className="wrap">{list}</div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {isFetching && <Spinner />}
    </section>
  );
}
