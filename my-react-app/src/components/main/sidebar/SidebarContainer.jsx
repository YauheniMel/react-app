import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getFriends } from '../../../redux/friend-reducer';

function SidebarApiContainer({ state, getFriends }) {
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);

    axios
      .get('/friends')
      .then(response => response.data)
      .then(data => getFriends(data))
      .finally(() => setIsLoading(false))
      .catch(err => console.error(err))
  }, [])

  return (
    <Sidebar
      state={state}
      isLoading={isLoading}
    />
  );
}

function mapStateToProps(state) {
  return {
    state: state.friendPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFriends: (arr) => {
      const action = getFriends(arr);

      dispatch(action);
    }
  }
}

export const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(SidebarApiContainer);
