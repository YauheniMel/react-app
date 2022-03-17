import React from 'react';
import style from './TargetFriend.module.scss';

export default function TargetFriend({ targetFriend }) {
  // need destructuring assignment

  return (
    <>
      <div className={style.wrapper}>
        <img src={targetFriend.photo} alt="photo" />
        <p>
          {targetFriend.firstName} {targetFriend.lastName}
        </p>
      </div>
    </>
  );
}
