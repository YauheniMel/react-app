import React from 'react';
import style from './CardUser.module.scss';
import { LinguaContext } from '../../contexts/LinguaContext';
import useUser from '../../hooks/useUser';
import { NavLink } from 'react-router-dom';

export default function CardUser({
  photo,
  firstName,
  lastName,
  post,
  isFriend,
  setFollow,
  setUnfollow,
  userId,
  followingInProgress
}) {
  const {
    user: { id }
  } = useUser();

  return (
    // bad place
    <LinguaContext.Consumer>
      {({ language }) => (
        <div className={style.wrap}>
          <NavLink to={`/reactproject/users/${userId}`}>
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
          </NavLink>
          {isFriend ? (
            <button
              disabled={followingInProgress.some((item) => item == userId)}
              onClick={() => setUnfollow(id, userId)}
            >
              {language.usersCard.unfollow}
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((item) => item == userId)}
              onClick={() => setFollow(id, userId)}
            >
              {language.usersCard.follow}
            </button>
          )}
        </div>
      )}
    </LinguaContext.Consumer>
  );
}
