import React from 'react';
import { addCredoContent, addHobbyContent } from '../../../../redux/state';

import style from './Desk.module.css';

function Desk(props) {
  const credoInputEl = React.createRef();
  const hobbyInputEl = React.createRef();

  function setCredoValue(event) {
    event.preventDefault();

    const value = credoInputEl.current.value;

    const action = addCredoContent(value);

    props.dispatch(action);
  }

  function setHobbyValue(event) {
    event.preventDefault();

    const value = hobbyInputEl.current.value;

    const action = addHobbyContent(value);

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
        <p>My hobby: <span>{ props.hobby }</span></p>
        <form onSubmit={ setHobbyValue } className={ style.form }>
          <input ref={ hobbyInputEl } type="text" className={ style.input_hobby }/>
          <button type="submit" className={ style.button_hobby }>+</button>
        </form>
      </div>
    </div>
  );
}

export default Desk;
