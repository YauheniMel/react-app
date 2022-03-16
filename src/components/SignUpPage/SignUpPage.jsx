import React from 'react';
import Link from '../../common/Link/Link';
import style from './SignUpPage.module.scss';

export default function SignUpPage() {
  const refLogin = React.createRef();
  const refPassword = React.createRef();

  return (
    <div className={`${style.container} container`}>
      <div className={style.wrapper}>
        <h2>Welcome!</h2>
      </div>
      <form onSubmit={() => {}} action="" className={style.form}>
        <fieldset>
          <legend>Please sign up!</legend>
          <input className={style.login} type="text" ref={refLogin} required />
          <input
            className={style.password}
            type="text"
            ref={refPassword}
            required
          />
          <input
            className={style.password}
            type="text"
            ref={refPassword}
            required
          />
          <input
            className={style.password}
            type="text"
            ref={refPassword}
            required
          />
          <input
            className={style.password}
            type="text"
            ref={refPassword}
            required
          />
          <div className={style.action}>
            <div className={style.buttons}>
              <button className={style.button_submit} type="submit">
                Register
              </button>
              <button className={style.button_restore} type="reset">
                Reset
              </button>
            </div>
            <Link path="/login" className={style.link}>
              Login
            </Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
