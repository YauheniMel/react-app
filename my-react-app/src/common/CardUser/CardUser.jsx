import React from 'react';
import style from './CardUser.module.scss';
import { LinguaContext } from '../../contexts/LinguaContext';
import axios from 'axios';

export default function CardUser({
  photo,
  firstName,
  lastName,
  post,
  isFriend,
  setFollow,
  setUnfollow,
  id,
}) {
  return (
    <LinguaContext.Consumer>
      {({ language }) => (
        <div className={style.wrap}>
          <img className={style.photo} src={photo} alt="photo user" />
          <div className={style.info}>
            <h5>
              {firstName} {lastName}
            </h5>
            <p>
              Minsk: <span>Belarus</span>
            </p>
          </div>
          <p>{post}</p>
          {isFriend ? (
            <button onClick={(e) => {
              e.stopPropagation();

              axios.post(`/user/${id}`, {})
                .then((response) => {
                  debugger;
                  setUnfollow(id);

                  return response.data
                })
                .catch(err => console.error(err));
            }}>
              {language.usersCard.unfollow}
            </button>
          ) : (
            <button onClick={(e) => {
              e.stopPropagation();
              axios.post(`/user/${id}`, {})
                .then((response) => {
                  debugger;
                  setFollow(id);

                  return response.data
                })
                .catch(err => console.error(err));
            }}>
              {language.usersCard.follow}
            </button>
          )}
        </div>
      )}
    </LinguaContext.Consumer>
  );
}
