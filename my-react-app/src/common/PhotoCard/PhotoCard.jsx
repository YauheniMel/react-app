import React from 'react';
import style from '../SectionPhotos.module.scss';

export default function PhotoCard({ data }) {
  return (
    <div className={style.photo_wrap}>
      <img src={data.url} alt="album" className={style.photo} />
    </div>
  );
}
