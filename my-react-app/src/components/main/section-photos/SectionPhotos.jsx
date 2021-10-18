import Photo from './photo/Photo';
import style from './SectionPhotos.module.css';

export default function SectionPhotos({ state }) {
  const photos = state.photos.map((photo) => {
    return <Photo key={ photo.id } data={ photo } />
  });

  return (
    <div className="section_wrap">
      <section className={ style.section }>
        { photos }
      </section>
    </div>
  );
}
