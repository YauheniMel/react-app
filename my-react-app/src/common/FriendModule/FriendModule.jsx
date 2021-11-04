import style from './FriendModule.module.scss';

export default function FriendModule({ firstName, lastName, photoURL }) {
  return (
    <div className={style.friend}>
      <div className={style.photo_wrap}>
        <img src={photoURL} alt="friend" className={style.photo} />
      </div>
      <p className={style.name}>
        {firstName} {lastName}
      </p>
    </div>
  );
}
