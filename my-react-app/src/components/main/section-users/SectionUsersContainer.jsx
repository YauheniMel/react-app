import { connect } from 'react-redux';
import { follow, getAllUsers, unfollow } from '../../../redux/users-reducer';
import { useEffect, useState } from 'react';
import SectionUsers from './SectionUsers';
import { withRouter } from 'react-router';
import useUser from '../../../hooks/useUser';

function SectionUsersAPIContainer({
  users,
  follow,
  unfollow,
  getUsers,
  match,
  isFetching,
  followingInProgress,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    user: { id },
  } = useUser();

  function handleChangePage(currentPage) {
    getUsers(id, currentPage);
  }

  function handleUnfollowUser(id, userId) {
    unfollow(id, userId);
  }

  function handleFollowUser(id, userId) {
    follow(id, userId);
  }

  useEffect(() => {
    handleChangePage(currentPage);
  }, [currentPage]);

  return (
    <SectionUsers
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      isFetching={isFetching}
      users={users}
      unfollow={handleUnfollowUser}
      follow={handleFollowUser}
      match={match}
      followingInProgress={followingInProgress}
    />
  );
}

function mapStateToProps(state) {
  return {
    users: state.usersPage.users,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    follow: (id, userId) => dispatch(follow(id, userId)),
    unfollow: (id, userId) => dispatch(unfollow(id, userId)),
    getUsers: (id, currentPage) => dispatch(getAllUsers(id, currentPage)),
  };
}

export const SectionUsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SectionUsersAPIContainer));
