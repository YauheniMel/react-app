import React from 'react';
import Link from '../../../common/Link/Link';
import style from './SignUpPage.module.scss';

export default function SignUpPage() {
  const refLogin = React.createRef();
  const refPassword = React.createRef();

  return (
    <div className={`${style.container} container`}>
      <div className={style.wrapper}>
        <h2>Welcome!</h2>
      </div>
      <form
        onSubmit={() => {}}
        action=""
        className={style.form}
        autoComplete="off"
        encType="multipart/form-data"
      >
        <fieldset>
          <legend>Please sign up!</legend>
          <input
            placeholder="Name..."
            type="text"
            required
          />
          <input
            placeholder="Surname..."
            type="text"
            required
          />
          <input
            type="date"
            required
          />
          <input
            className={style.login}
            placeholder="login..."
            type="text"
            ref={refLogin}
            required
          />
          <div className={style.gender}>
            <p>Choose your gender</p>
            <label>
              <input
                type="radio"
                name="sex"
                value="male"
              />
              <span>male</span>
            </label>
            <label>
              <input
                type="radio"
                name="sex"
                value="female"
              />
              <span>female</span>
            </label>
          </div>
          <input
            placeholder="Add photo..."
            type="file"
            ref={refPassword}
            required
          />
          <input
            className={style.password}
            placeholder="password..."
            type="text"
            ref={refPassword}
            required
          />
          <input
            className={style.password}
            placeholder="confirm password..."
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
