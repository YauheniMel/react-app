import Pagination from '../../../common/Pagination/Pagination';
import Photo from './photo/Photo';
import style from './SectionPhotos.module.scss';
import Spinner from '../../../common/Spinner/Spinner';

export default function SectionPhotos({ photos, currentPage, setCurrentPage, isLoading }) {
  const photoList = photos.map((photo) => {
    return (
      <Photo key={photo.id} content={photo.title} photoURL={photo.photoURL} />
    );
  });

  return (
    <section className={`section_wrap ${style.section}`}>
      {photoList}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {isLoading && <Spinner />}
    </section>
  );
}
