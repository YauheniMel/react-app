import React from 'react';
import style from './CardUser.module.scss';
import { LinguaContext } from '../../contexts/LinguaContext';
import useUser from '../../hooks/useUser';
import { requestAPI } from '../../api/api';

export default function CardUser({
  photo,
  firstName,
  lastName,
  post,
  isFriend,
  setFollow,
  setUnfollow,
  userId,
}) {
  const {
    user: { id },
  } = useUser();

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
            <button
              onClick={(e) => {
                e.stopPropagation();

                requestAPI
                  .delFriend(id, userId) // need to refact names
                  .then(() => setUnfollow(userId))
                  .catch((err) => console.error(err));
              }}
            >
              {language.usersCard.unfollow}
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();

                requestAPI
                  .addFriend(id, userId)
                  .then(() => setFollow(userId))
                  .catch((err) => console.error(err));
              }}
            >
              {language.usersCard.follow}
            </button>
          )}
        </div>
      )}
    </LinguaContext.Consumer>
  );
}
