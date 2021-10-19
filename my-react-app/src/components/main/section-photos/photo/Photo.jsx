import style from '../SectionPhotos.module.scss';

export default function Photo({ data }) {
  return (
    <div className={style.photo_wrap}>
      <img src={data.url} alt="album" className={style.photo} />
    </div>
  );
}
