import { connect } from 'react-redux';
import {
  followUser,
  getUsers,
  unFollowUser,
} from '../../../redux/users-reducer';
import { useEffect, useState } from 'react';
import SectionUsers from './SectionUsers';
import axios from 'axios';
import { withRouter } from 'react-router';
import useUser from '../../../hooks/useUser';

function SectionUsersAPIContainer({
  users,
  follow,
  unfollow,
  getUsers,
  match,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState();
  const { user: {id} } = useUser();

  function handleChangePage(num) {
    setIsLoading(true);

    axios
      .get(`/users/${id}/${num}`)
      .then((response) => response.data)
      .then((data) => getUsers(data))
      .catch((err) => console.error(err));

    setIsLoading(false);
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
      match={match}
    />
  );
}

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

export const SectionUsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SectionUsersAPIContainer));
