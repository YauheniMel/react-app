import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestAPI } from '../../api/api';
import useUser from '../../hooks/useUser';
import {
  createUserLogin,
  createUserPassword,
  loginUser,
  setUserInfo,
} from '../../redux/auth-reducer';
import AuthPage from './AuthPage';

function AuthPageApiContainer({
  createUserLogin,
  createUserPassword,
  loginUser,
  state,
  setUserInfo,
}) {
  const { user, setUser } = useUser();

  useEffect(() => {
    if (user) setUserInfo(user);
  }, [user]);

  async function getUser(credentials) {
    return requestAPI.login(credentials);
  }

  async function handleSubmit() {
    const credentials = {
      login: state.loginValue,
      password: state.passwordValue,
    };

    const user = await getUser(credentials);
    setUser(user);

    loginUser();
  }

  return (
    <AuthPage
      onChangeLogin={createUserLogin}
      onChangePassword={createUserPassword}
      state={state}
      onSubmit={handleSubmit}
    />
  );
}

function mapStateToProps(state, ownProps) {
  return {
    state: state.auth,
    setUser: ownProps.setUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: () => {
      event.preventDefault();

      const action = loginUser();

      dispatch(action);
    },
    createUserPassword: (elem) => {
      const value = elem.current.value;

      const action = createUserPassword(value);

      dispatch(action);
    },
    createUserLogin: (elem) => {
      const value = elem.current.value;

      const action = createUserLogin(value);

      dispatch(action);
    },
    setUserInfo: (obj) => {
      const action = setUserInfo(obj);

      dispatch(action);
    },
  };
}

export const AuthPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthPageApiContainer);
