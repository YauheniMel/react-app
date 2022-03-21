import React from 'react';
import Spinner from '../../../../common/Spinner/Spinner';
import style from './TargetFriend.module.scss';

export default function TargetFriend({ targetFriend, isLoading }) {
  return (
    <>
      {isLoading && <Spinner />}
      <div className={style.wrapper}>
        <img src={targetFriend.photo} alt="photo" />
        <p>
          {targetFriend.firstName} {targetFriend.lastName}
        </p>
      </div>
    </>
  );
}
