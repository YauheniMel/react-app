import { connect } from 'react-redux';
import {
  follow,
  getTargetUsers,
  setCurrentUserPage,
  unfollow
} from '../../../redux/users-reducer';
import SectionUsers from './SectionUsers';
import { withRouter } from 'react-router';
import useUser from '../../../hooks/useUser';
import { useEffect } from 'react';

function SectionUsersAPIContainer({
  users,
  follow,
  unfollow,
  getTargetUsers,
  setCurrentUserPage,
  totalPages,
  currentPage,
  match,
  isFetching,
  followingInProgress
}) {
  const {
    user: { id }
  } = useUser();

  useEffect(() => {
    handleChangePage(currentPage);
  }, []);

  function handleChangePage(currentPage) {
    setCurrentUserPage(currentPage);

    getTargetUsers(id, currentPage);
  }

  function handleUnfollowUser(id, userId) {
    unfollow(id, userId);
  }

  function handleFollowUser(id, userId) {
    follow(id, userId);
  }

  return (
    <SectionUsers
      currentPage={currentPage}
      changePage={handleChangePage}
      isFetching={isFetching}
      users={users}
      unfollow={handleUnfollowUser}
      totalPages={totalPages}
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
    currentPage: state.usersPage.currentPage,
    totalPages: state.usersPage.totalPages
  };
}

export const SectionUsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  getTargetUsers,
  setCurrentUserPage
})(withRouter(SectionUsersAPIContainer));
