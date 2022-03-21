import React from 'react';
import Spinner from '../../../../common/Spinner/Spinner';
import style from './TargetUser.module.scss';

export default function TargetUser({ targetUser, isLoading }) {
  return (
    <>
      {isLoading && <Spinner />}
      <div className={style.wrapper}>
        <strong>
          {targetUser.firstName} {targetUser.lastName}
        </strong>
        <img src={targetUser.photo} alt="photo" />
        <p>{targetUser.body}</p>
      </div>
    </>
  );
}
