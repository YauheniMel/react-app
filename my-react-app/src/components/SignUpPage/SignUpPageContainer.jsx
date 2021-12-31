import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  createUserLogin,
  createUserPassword,
  loginUser,
} from '../../redux/auth-reducer';
import SignUpPage from './SignUpPage';

function SignUpPageApiContainer() {
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {}, []);

  return (
    <SignUpPage
      onSubmit={loginUser}
      onChangeLogin={createUserLogin}
      onChangePassword={createUserPassword}
    />
  );
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export const SignUpPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPageApiContainer);
