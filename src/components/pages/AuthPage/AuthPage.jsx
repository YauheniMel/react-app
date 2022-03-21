import React from 'react';
import Link from '../../../common/Link/Link';
import style from './AuthPage.module.scss';

export default function AuthPage({
  onChangeLogin,
  onChangePassword,
  state,
  onSubmit
}) {
  const refLogin = React.createRef();
  const refPassword = React.createRef();

  return (
    <div className={`${style.container} container`}>
      <div className={style.wrapper}>
        <h2>Welcome!</h2>
      </div>
      <form onSubmit={onSubmit} action="" className={style.form}>
        <fieldset>
          <legend>Login form</legend>
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
          <div className={style.action}>
            <div className={style.buttons}>
              <button className={style.button_submit} type="submit">
                Authorization
              </button>
              <button className={style.button_restore} type="button">
                Forget your password?
              </button>
            </div>
            <Link path="/signup" className={style.link}>
              SignUp
            </Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
