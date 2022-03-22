import SectionFriends from './SectionFriends';
import { connect } from 'react-redux';
import {
  getTargetFriends,
  setCurrentFriendPage
} from '../../../redux/friend-reducer';
import useUser from '../../../hooks/useUser';
import { withRouter } from 'react-router';
import { useEffect } from 'react';

function SectionFriendsApiContainer({
  friends,
  getTargetFriends,
  setCurrentPage,
  currentPage,
  totalPages,
  match,
  isFetching
}) {
  const {
    user: { id }
  } = useUser();

  useEffect(() => {
    handleChangePage(currentPage);
  }, []);

  function handleChangePage(currentPage) {
    setCurrentPage(currentPage);

    getTargetFriends(id, currentPage);
  }

  return (
    <SectionFriends
      friends={friends}
      isFetching={isFetching}
      changePage={handleChangePage}
      currentPage={currentPage}
      totalPages={totalPages}
      match={match}
    />
  );
}

function mapStateToProps(state) {
  return {
    friends: state.friendPage.friends,
    isFetching: state.friendPage.isFetching,
    totalPages: state.friendPage.totalPages,
    currentPage: state.friendPage.currentPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTargetFriends: (id, currentPage) =>
      dispatch(getTargetFriends(id, currentPage)),
    setCurrentPage: (numPage) => dispatch(setCurrentFriendPage(numPage))
  };
}

export const SectionFriendsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SectionFriendsApiContainer));
