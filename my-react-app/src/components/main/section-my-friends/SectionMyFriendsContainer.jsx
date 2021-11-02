import SectionMyFriends from './SectionMyFriends';
import { connect } from 'react-redux';
import { getFriends } from '../../../redux/friend-reducer';
import { useEffect, useState } from 'react';
import axios from 'axios';

function SectionMyFriendsApiContainer({ friends, getFriends }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState();

  function handleChangePage(num) {
    setIsLoading(true);
    axios
      .get('/friends')
      .then((response) => response.data)
      .then((data) => getFriends(data))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    handleChangePage(currentPage);
  }, [currentPage]);

  return (
    <SectionMyFriends
      friends={friends}
      isLoading={isLoading}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
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

export const SectionMyFriendsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionMyFriendsApiContainer);
