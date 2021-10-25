import React from 'react';
import style from './CardUser.module.scss';
import { LinguaContext } from '../../contexts/LinguaContext';


export default function CardUser({photo, name, post, isFriend, setFollow, setUnfollow, id}) {
  return (
    <LinguaContext.Consumer>
      {({language}) => (
        <div className={style.wrap}>
          <img className={style.photo} src={photo} alt="photo user" />
          <div className={style.info}>
            <h5>{name}</h5>
            <p>Minsk: <span>Belarus</span></p>
          </div>
          <p>{post}</p>
          {
            isFriend
              ? <button onClick={() => setUnfollow(id)}>{language.usersCard.unfollow}</button>
              : <button onClick={() => setFollow(id)}>{language.usersCard.follow}</button>
          }
        </div>
      )}
    </LinguaContext.Consumer>
  );
}
