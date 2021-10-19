import Photo from './photo/Photo';
import style from './SectionPhotos.module.scss';

export default function SectionPhotos({ photos }) {
  const photoList = photos.map((photo) => {
    return <Photo key={photo.id} data={photo} />;
  });

  return (
    <div className="section_wrap">
      <section className={style.section}>{photoList}</section>
    </div>
  );
}
