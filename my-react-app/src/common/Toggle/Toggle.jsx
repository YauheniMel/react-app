import style from './Toggle.module.scss';

function Toggle({ checked, title, valueChange, choice, valueChoice }) {
  function onHandleChange(e) {
    const isChecked = e.target.checked;
    isChecked ? valueChange(valueChoice.on) : valueChange(valueChoice.off);
  }

  return (
    <div className={style.wrapper}>
      <p className={style.title}>{title}</p>
      <div className={style.toggleContainer}>
        <input
          type="checkbox"
          className={style.checkbox}
          onChange={onHandleChange}
          defaultChecked={checked}
        />
        <label className={style.label}>
          <span className={style.before}>{choice[0]}</span>
          <span className={style.after}>{choice[1]}</span>
          <span className={style.switch}></span>
        </label>
      </div>
    </div>
  );
}

export default Toggle;
