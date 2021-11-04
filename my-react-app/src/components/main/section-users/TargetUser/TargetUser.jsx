import React from 'react';
import Spinner from '../../../../common/Spinner/Spinner';
import style from './TargetUser.module.scss';

export default function TargetUser({ data, isLoading }) {
  return (
    <>
      {isLoading && <Spinner />}
      <div className={style.wrapper}>
        <strong>
          {data.firstName} {data.lastName}
        </strong>
        <img src={data.photo} alt="photo" />
        <p>{data.body}</p>
      </div>
    </>
  );
}
