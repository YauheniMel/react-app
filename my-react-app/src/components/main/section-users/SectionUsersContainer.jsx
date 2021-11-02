import { connect } from 'react-redux';
import {
  followUser,
  getUsers,
  unFollowUser,
} from '../../../redux/users-reducer';
import { useEffect, useState } from 'react';
import SectionUsers from './SectionUsers';
import axios from 'axios';

function mapStateToProps(state) {
  return {
    users: state.usersPage.users,
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
  };
}

function SectionUsersAPIContainer({ users, follow, unfollow, getUsers }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState();

  function handleChangePage(num) {
    setIsLoading(true);
    axios
      .get('/users')
      .finally(() => setIsLoading(false))
      .then((response) => response.data)
      .then((data) => getUsers(data))
      .catch((err) => console.error(`Error: ${err}`));
  }

  useEffect(() => {
    handleChangePage(currentPage);
  }, [currentPage]);

  return (
    <SectionUsers
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      isLoading={isLoading}
      users={users}
      follow={follow}
      unfollow={unfollow}
    />
  );
}

export const SectionUsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionUsersAPIContainer);
