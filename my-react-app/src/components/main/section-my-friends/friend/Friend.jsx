import style from '../SectionMyFriends.module.scss';

export default function Friend({ name, photoURL }) {
  return (
    <div className={style.friend}>
      <div className={style.photo_wrap}>
        <img src={photoURL} alt="friend" className={style.photo} />
      </div>
      <p className={style.name}>{name}</p>
    </div>
  );
}
