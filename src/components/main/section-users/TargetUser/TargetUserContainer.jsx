import React, { useEffect } from 'react';
import TargetUser from './TargetUser';
import { connect } from 'react-redux';
import { getTargetUser } from '../../../../redux/users-reducer';
import { withRouter } from 'react-router-dom';

function TargetUserApiContainer({ targetUser, getTargetUser, match }) {
  useEffect(() => {
    if (!match.params.userId) return;

    getTargetUser(match.params.userId);
  }, [match.params.userId]);

  return <>{match.params.userId && <TargetUser targetUser={targetUser} />}</>;
}

function mapStateToProps(state) {
  return {
    targetUser: state.usersPage.targetUser
  };
}

export const TargetUserContainer = connect(mapStateToProps, { getTargetUser })(
  withRouter(TargetUserApiContainer)
);
