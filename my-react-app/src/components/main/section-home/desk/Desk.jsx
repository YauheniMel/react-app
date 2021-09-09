import React from 'react';

import style from './Desk.module.css';

function Desk() {
  const credoInputEl = React.createRef();
  const hobbyInputEl = React.createRef();

  function setCredoValue(event) {
    event.preventDefault();

    const value = credoInputEl.current.value;

    console.log(value);
  }

  function setHobbyValue(event) {
    event.preventDefault();

    const value = hobbyInputEl.current.value;

    console.log(value);
  }

  return (
    <div className={ style.desk }>
      <div className={ style.image_wrap }>
        <img className={ style.image } src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" alt="foto" />
      </div>
      <div className={ style.info }>
        <p>My credo: <span>always work on yourself</span></p>
        <form onSubmit={ setCredoValue } className={ style.form_credo }>
          <input ref={ credoInputEl } type="text" className={ style.input_credo }/>
          <button type="submit" className={ style.button_credo }>+</button>
        </form>
        <p>My hobby: <span>guitar, football</span></p>
        <form onSubmit={ setHobbyValue } className={ style.form }>
          <input ref={ hobbyInputEl } type="text" className={ style.input_hobby }/>
          <button type="submit" className={ style.button_hobby }>+</button>
        </form>
      </div>
    </div>
  );
}

export default Desk;
