import React from 'react';
import { connect } from 'react-redux';
import {
  createUserLogin,
  createUserPassword,
  login
} from '../../redux/auth-reducer';
import AuthPage from './AuthPage';

function AuthPageApiContainer({
  createUserLogin,
  createUserPassword,
  login,
  state,
  setUser
}) {
  function handleSubmit(event) {
    event.preventDefault();

    const credentials = {
      login: state.loginValue,
      password: state.passwordValue
    };

    login(credentials, setUser);
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
    setUser: ownProps.setUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
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
    login: (credentials, callback) => dispatch(login(credentials, callback))
  };
}

export const AuthPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthPageApiContainer);
