import React from 'react';
import Link from '../../../common/Link/Link';
import style from './SignUpPage.module.scss';

export default function SignUpPage({ handleSubmit }) {
  const refLogin = React.createRef();
  const refPassword = React.createRef();

  function submit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    handleSubmit(formData);
  }

  return (
    <div className={`${style.container} container`}>
      <div className={style.wrapper}>
        <h2>Welcome!</h2>
      </div>
      <form
        onSubmit={submit}
        action=""
        className={style.form}
        autoComplete="off"
        encType="multipart/form-data"
      >
        <fieldset>
          <legend>Please sign up!</legend>
          <input placeholder="Name..." type="text" name="firstName" required />
          <input
            placeholder="Surname..."
            type="text"
            name="lastName"
            required
          />
          <input type="date" name="dateOfBirth" required />
          <input
            className={style.login}
            placeholder="login..."
            type="text"
            name="login"
            ref={refLogin}
            required
          />
          <div className={style.gender}>
            <p>Choose your gender</p>
            <label>
              <input type="radio" name="sex" value="male" />
              <span>male</span>
            </label>
            <label>
              <input type="radio" name="sex" value="female" />
              <span>female</span>
            </label>
          </div>
          <input
            placeholder="Add photo..."
            type="file"
            name="photo"
            ref={refPassword}
            required
          />
          <input
            className={style.password}
            placeholder="password..."
            type="text"
            name="password"
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
              <button type="submit">Register</button>
              <button type="reset">Reset</button>
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
