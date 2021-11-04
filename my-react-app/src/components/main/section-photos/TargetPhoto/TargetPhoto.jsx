import React from 'react';
import Spinner from '../../../../common/Spinner/Spinner';
import style from './TargetPhoto.module.scss';

export default function TargetPhoto({ targetPhoto, isLoading }) {
  return (
    <>
      {isLoading && <Spinner />}
      <div className={style.wrapper}>
        <img src={targetPhoto.url} alt="photo" />
        <p>{targetPhoto.title}</p>
      </div>
    </>
  );
}
