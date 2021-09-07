import Photo from './photo/Photo';
import style from './SectionPhotos.module.css';

function SectionPhotos(props) {
  const photos = props.photos.map((photo) => {
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

export default SectionPhotos
