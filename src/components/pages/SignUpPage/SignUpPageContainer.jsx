import React from 'react';
import { connect } from 'react-redux';
import {
  createUserLogin,
  createUserPassword,
  setUserInfo
} from '../../../redux/auth-reducer';
import SignUpPage from './SignUpPage';

function SignUpPageApiContainer({ setUserInfo }) {
  function handleSubmit(formData) {
    const data = {};

    formData.forEach((value, name) => {
      data[name] = value;
    });

    setUserInfo(data);
  }

  return (
    <SignUpPage
      handleSubmit={handleSubmit}
      onChangeLogin={createUserLogin}
      onChangePassword={createUserPassword}
    />
  );
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    setUserInfo: (content) => dispatch(setUserInfo(content))
  };
}

export const SignUpPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPageApiContainer);
