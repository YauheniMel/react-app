import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TargetUser from './TargetUser';
import { connect } from 'react-redux';
import { getTargetUser } from '../../../../redux/users-reducer';

function TargetUserApiContainer({ user, getTargetUser, match }) {
  const [isLoading, setIsLoading] = useState();
  const [targetUser, setTargetUser] = useState(4);

  useEffect(() => {
    if (!match.params.userId) return;

    setIsLoading(true);

    if (!targetUser) return;

    axios
      .get(`/user/${match.params.userId}`) // maybe there's bad practice
      .finally(() => setIsLoading(false))
      .then((response) => response.data)
      .then((data) => getTargetUser(...data))
      .catch((err) => console.error(err));
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
