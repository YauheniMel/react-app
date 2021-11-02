import React from 'react';
import style from './TextInput.module.scss';

export default function TextInput({
  title,
  content,
  value,
  onSubmit,
  onChange,
}) {
  const ref = React.createRef();

  return (
    <div className={style.info}>
      <div>
        <div className={style.title}>
          {title}
          <form onSubmit={onSubmit} className={style.form}>
            <input
              ref={ref}
              onChange={() => onChange(ref)}
              type="text"
              className={style.input}
              value={value}
            />
            <button type="submit" className={style.button}></button>
          </form>
        </div>
        <span>{content}</span>
        <button type="submit" className={style.btn_editor}>
          &#9998;
        </button>
      </div>
    </div>
  );
}
