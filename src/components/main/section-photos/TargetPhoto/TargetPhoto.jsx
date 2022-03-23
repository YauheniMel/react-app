import React from 'react';
import style from './TargetPhoto.module.scss';

export default function TargetPhoto({ targetPhoto }) {
  return (
    <div className={style.wrapper}>
      <img src={targetPhoto.url} alt="photo" />
      <p>{targetPhoto.title}</p>
    </div>
  );
}
