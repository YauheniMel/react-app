import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getTargetFriend } from '../../../../redux/friend-reducer';
import TargetFriend from './TargetFriend';

function TargetFriendApiContainer({ match, targetFriend, getTargetFriend }) {
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    if (!match.params.friendId) return;
    setIsLoading(true);

    axios
      .get(`/friend/${match.params.friendId}`)
      .finally(() => setIsLoading(false))
      .then((response) => response.data)
      .then((data) => getTargetFriend(...data))
      .catch((err) => console.error(err));
  }, [match.params.friendId]);

  return (
    <>
      {match.params.friendId && (
        <TargetFriend targetFriend={targetFriend} isLoading={isLoading} />
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    targetFriend: state.friendPage.targetFriend,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTargetFriend: (obj) => {
      const action = getTargetFriend(obj);

      dispatch(action);
    },
  };
}

export const TargetFriendContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TargetFriendApiContainer));
