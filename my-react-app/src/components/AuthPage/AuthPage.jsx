import React from 'react';
import Link from '../../common/Link/Link';
import style from './AuthPage.module.scss';

export default function AuthPage({
  onChangeLogin,
  onChangePassword,
  state,
  onSubmit,
}) {
  const refLogin = React.createRef();
  const refPassword = React.createRef();

  return (
    <div className={style.wrapper}>
      <h2>Welcome! Please Log In!</h2>
      <form onSubmit={onSubmit} action="">
        <legend>
          Login form
          <input
            className={style.login}
            value={state.loginValue}
            type="text"
            onChange={() => onChangeLogin(refLogin)}
            ref={refLogin}
            required
          />
          <input
            className={style.password}
            value={state.passwordValue}
            type="password"
            onChange={() => onChangePassword(refPassword)}
            ref={refPassword}
            required
          />
          <button className={style.button_submit} type="submit">
            Authorization
          </button>
          <button className={style.button_restore}>
            Forget your password?
          </button>
          <Link path="/signup" className={style.button_restore}>
            SignUp
          </Link>
        </legend>
      </form>
    </div>
  );
}
