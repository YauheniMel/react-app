import React from 'react';
import style from './TargetUser.module.scss';

export default function TargetUser({ targetUser }) {
  return (
    <div className={style.wrapper}>
      <strong>
        {targetUser.firstName} {targetUser.lastName}
      </strong>
      <img src={targetUser.photo} alt="photo" />
      <p>{targetUser.body}</p>
    </div>
  );
}
