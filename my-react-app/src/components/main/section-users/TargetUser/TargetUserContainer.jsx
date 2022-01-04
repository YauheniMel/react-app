import React, { useEffect, useState } from 'react';
import TargetUser from './TargetUser';
import { connect } from 'react-redux';
import { getTargetUser } from '../../../../redux/users-reducer';
import { requestAPI } from '../../../../api/api';

function TargetUserApiContainer({ user, getTargetUser, match }) {
  const [isLoading, setIsLoading] = useState();
  const [targetUser, setTargetUser] = useState(4);

  useEffect(() => {
    if (!match.params.userId) return;

    setIsLoading(true);

    if (!targetUser) return;

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
  }, [targetUser, match.params.userId]);

  return (
    <>
      {match.params.userId && <TargetUser data={user} isLoading={isLoading} />}
    </>
  );
}

function mapStateToProps(state) {
  return {
    user: state.usersPage.targetUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTargetUser: (obj) => {
      const action = getTargetUser(obj);

      dispatch(action);
    },
  };
}

export const TargetUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TargetUserApiContainer);
