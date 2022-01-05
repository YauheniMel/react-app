import SectionFriends from './SectionFriends';
import { connect } from 'react-redux';
import { getAllFriends } from '../../../redux/friend-reducer';
import { useEffect, useState } from 'react';
import useUser from '../../../hooks/useUser';
import { withRouter } from 'react-router';

function SectionFriendsApiContainer({
  friends,
  getFriends,
  match,
  isFetching,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    user: { id },
  } = useUser();

  function handleChangePage(currentPage) {
    getFriends(id, currentPage);
  }

  useEffect(() => {
    handleChangePage(currentPage);
  }, [currentPage]);

  return (
    <SectionFriends
      friends={friends}
      isFetching={isFetching}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      match={match}
    />
  );
}

function mapStateToProps(state) {
  return {
    friends: state.friendPage.friends,
    isFetching: state.friendPage.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFriends: (id, currentPage) => dispatch(getAllFriends(id, currentPage)),
  };
}

export const SectionFriendsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SectionFriendsApiContainer));
