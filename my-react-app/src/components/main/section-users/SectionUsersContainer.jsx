import { connect } from 'react-redux';
import {
  followUser,
  getUsers,
  toggleIsFollowing,
  unFollowUser,
  usersIsFetching,
} from '../../../redux/users-reducer';
import { useEffect, useState } from 'react';
import SectionUsers from './SectionUsers';
import { withRouter } from 'react-router';
import useUser from '../../../hooks/useUser';
import { requestAPI } from '../../../api/api';

function SectionUsersAPIContainer({
  users,
  follow,
  unfollow,
  getUsers,
  match,
  isFetching,
  usersIsFetching,
  followingInProgress,
  toggleIsFollowing,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    user: { id },
  } = useUser();

  function handleChangePage(currentPage) {
    usersIsFetching(true);

    requestAPI
      .getUsers(id, currentPage)
      .then((data) => {
        getUsers(data);

        usersIsFetching(false);
      })
      .catch((err) => {
        console.error(err);

        usersIsFetching(false);
      });
  }

  function handleUnfollowUser(id, userId) {
    toggleIsFollowing(true, userId);
    requestAPI
      .delFriend(id, userId)
      .then(() => {
        unfollow(userId);

        toggleIsFollowing(false, userId);
      })
      .catch((err) => {
        console.error(err);

        toggleIsFollowing(false, userId);
      });
  }

  function handleFollowUser(id, userId) {
    toggleIsFollowing(true, userId);

    requestAPI
      .addFriend(id, userId)
      .then(() => {
        follow(userId);

        toggleIsFollowing(false, userId);
      })
      .catch((err) => {
        console.error(err);

        toggleIsFollowing(false, userId);
      });
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
      toggleIsFollowing={toggleIsFollowing}
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
    follow: (id) => {
      const action = followUser(id);

      dispatch(action);
    },
    unfollow: (id) => {
      const action = unFollowUser(id);

      dispatch(action);
    },
    getUsers: (arr) => {
      const action = getUsers(arr);

      dispatch(action);
    },
    usersIsFetching: (value) => {
      const action = usersIsFetching(value);

      dispatch(action);
    },
    toggleIsFollowing: (value, id) => {
      const action = toggleIsFollowing(value, id);

      dispatch(action);
    },
  };
}

export const SectionUsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SectionUsersAPIContainer));
