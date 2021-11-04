import React from 'react';
import style from './PhotoCard.module.scss';

export default function PhotoCard({ photoURL, content }) {
  return (
    <div className={style.photo_wrap}>
      <img src={photoURL} alt="album" className={style.photo} />
      <p>{content}</p>
    </div>
  );
}
