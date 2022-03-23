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
  setCurrentFriendPage,
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
    setCurrentFriendPage(currentPage);
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

export const SectionFriendsContainer = connect(mapStateToProps, {
  getTargetFriends,
  setCurrentFriendPage
})(withRouter(SectionFriendsApiContainer));
