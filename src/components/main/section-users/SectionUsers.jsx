import React from 'react';
import CardUser from '../../../common/CardUser/CardUser';
import Pagination from '../../../common/Pagination/Pagination';
import Spinner from '../../../common/Spinner/Spinner';
import { TargetUserContainer } from './TargetUser/TargetUserContainer';
import { Route } from 'react-router-dom';

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
  const userList = users.map((user) => {
    return (
      <CardUser
        userId={user.id}
        key={user.id}
        firstName={user.firstName}
        lastName={user.lastName}
        photo={user.avatar}
        isFriend={user.isFriend}
        setFollow={follow}
        setUnfollow={unfollow}
        followingInProgress={followingInProgress}
      />
    );
  });

  return (
    <section className="section">
      <Route
        path="/reactproject/users/:userId"
        render={() => <TargetUserContainer match={match} />}
      />
      <div className="wrap">{userList}</div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {isFetching && <Spinner />}
    </section>
  );
}
