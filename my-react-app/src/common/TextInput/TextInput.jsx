import React from 'react';
import style from './TextInput.module.scss';

export default function TextInput({ title, content, setValue, callback }) {
  const ref = React.createRef();

  return (
    <div className={style.info}>
      <div>
        <p className={style.title}>
          {title}
          <form onSubmit={() => setValue(ref, callback)} className={style.form}>
            <input ref={ref} type="text" className={style.input} />
            <button type="submit" className={style.button}></button>
          </form>
        </p>
        <span>{content}</span>
        <button type="submit" className={style.btn_editor}>
          &#9998;
        </button>
      </div>
    </div>
  );
}
