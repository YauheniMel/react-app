import React from 'react';
import { addCredoContent, addPostContent } from '../../../../redux/home-reducer';

import style from './Desk.module.css';

function Desk(props) {
  const credoInputEl = React.createRef();
  const postInputEl = React.createRef();

  function setCredoValue(event) {
    event.preventDefault();

    const value = credoInputEl.current.value;

    const action = addCredoContent(value);

    props.dispatch(action);
  }

  function setPostValue(event) {
    event.preventDefault();

    const value = postInputEl.current.value;

    const action = addPostContent(value);

    props.dispatch(action);
  }

  return (
    <div className={ style.desk }>
      <div className={ style.image_wrap }>
        <img className={ style.image } src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" alt="foto" />
      </div>
      <div className={ style.info }>
        <p>My credo: <span>{ props.credo }</span></p>
        <form onSubmit={ setCredoValue } className={ style.form_credo }>
          <input ref={ credoInputEl } type="text" className={ style.input_credo }/>
          <button type="submit" className={ style.button_credo }>+</button>
        </form>
        <p>My post: <span>{ props.post }</span></p>
        <form onSubmit={ setPostValue } className={ style.form }>
          <input ref={ postInputEl } type="text" className={ style.input_post }/>
          <button type="submit" className={ style.button_post }>+</button>
        </form>
      </div>
    </div>
  );
}

export default Desk;
