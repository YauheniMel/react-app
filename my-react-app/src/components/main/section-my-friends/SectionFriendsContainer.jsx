import SectionFriends from './SectionFriends';
import { connect } from 'react-redux';
import { getFriends } from '../../../redux/friend-reducer';
import { useEffect, useState } from 'react';
import useUser from '../../../hooks/useUser';
import axios from 'axios';
import { withRouter } from 'react-router';

function SectionFriendsApiContainer({ friends, getFriends, match }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState();
  const { user: {id} } = useUser();

  function handleChangePage() {
    setIsLoading(true);

    axios
      .get(`/friends/id${id}/${currentPage}`)
      .then((response) => response.data)
      .then((data) => getFriends(data))
      .catch((err) => console.error(err));

    setIsLoading(false);
  }

  useEffect(() => {
    handleChangePage(currentPage);
  }, [currentPage]);

  return (
    <SectionFriends
      friends={friends}
      isLoading={isLoading}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      match={match}
    />
  );
}

function mapStateToProps(state) {
  return {
    friends: state.friendPage.friends,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFriends: (arr) => {
      const action = getFriends(arr);

      dispatch(action);
    },
  };
}

export const SectionFriendsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SectionFriendsApiContainer));
