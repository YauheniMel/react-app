import React from 'react';
import style from './Spinner.module.scss';
import spinnerURL from '../../assets/svg/spinner.svg';

export default function Spinner() {
  return (
    <div className={style.wrap}>
      <span className={style.spinner}>
        <img src={spinnerURL} alt="spinner" />
      </span>
    </div>
  );
}
