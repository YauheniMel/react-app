import style from '../SectionPhotos.module.scss';

export default function Photo({ photoURL, content }) {
  return (
    <div className={style.photo_wrap}>
      <img src={photoURL} alt="album" className={style.photo} />
      {content}
    </div>
  );
}
