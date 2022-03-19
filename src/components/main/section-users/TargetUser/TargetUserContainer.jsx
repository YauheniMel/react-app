import React, { useEffect, useState } from 'react';
import TargetUser from './TargetUser';
import { connect } from 'react-redux';
import { getTargetUser } from '../../../../redux/users-reducer';
import { requestAPI } from '../../../../api/api';

function TargetUserApiContainer({ targetUser, getTargetUser, match }) {
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    if (!match.params.userId) return;
    setIsLoading(true);

    requestAPI
      .getTargetUser(match.params.userId) // maybe there's bad practice
      .then((data) => {
        getTargetUser(...data);

        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);

        setIsLoading(false);
      });
  }, [match.params.userId]);

  return (
    <>
      {match.params.userId && (
        <TargetUser targetUser={targetUser} isLoading={isLoading} />
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    targetUser: state.usersPage.targetUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTargetUser: (obj) => {
      const action = getTargetUser(obj);

      dispatch(action);
    }
  };
}

export const TargetUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TargetUserApiContainer);
