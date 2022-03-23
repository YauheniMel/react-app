import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getTargetFriend } from '../../../../redux/friend-reducer';
import TargetFriend from './TargetFriend';

function TargetFriendApiContainer({ match, targetFriend, getTargetFriend }) {
  useEffect(() => {
    // render earlier than parent element
    if (!match.params.friendId) return;

    getTargetFriend(match.params.friendId);
  }, [match.params.friendId]);

  return (
    <>{match.params.friendId && <TargetFriend targetFriend={targetFriend} />}</>
  );
}

function mapStateToProps(state) {
  return {
    targetFriend: state.friendPage.targetFriend
  };
}

export const TargetFriendContainer = connect(mapStateToProps, {
  getTargetFriend
})(withRouter(TargetFriendApiContainer));
