import React from 'react';
import style from './SignUpPage.module.scss';

export default function SignUpPage() {
  const refLogin = React.createRef();
  const refPassword = React.createRef();

  return (
    <div className={style.wrapper}>
      <h2>SignUp!</h2>
      <form onSubmit={() => {}} action="">
        <legend>
          Login form
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
          <button className={style.button_submit} type="submit">
            Confirm
          </button>
          <button className={style.button_restore}>Reset</button>
        </legend>
      </form>
    </div>
  );
}
