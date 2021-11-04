import Pagination from '../../../common/Pagination/Pagination';
import PhotoCard from '../../../common/PhotoCard/PhotoCard';
import style from './SectionPhotos.module.scss';
import Spinner from '../../../common/Spinner/Spinner';
import Link from '../../../common/Link/Link';
import { TargetPhotoContainer } from './TargetPhoto/TargetPhotoContainer';

export default function SectionPhotos({
  photos,
  currentPage,
  setCurrentPage,
  isLoading,
  match,
}) {
  const photoList = photos.map((photo) => {
    return (
      <Link key={photo.id} path={`/photos/${photo.id}`}>
        <PhotoCard content={photo.title} photoURL={photo.url} />
      </Link>
    );
  });

  return (
    <section className={`section_wrap ${style.section}`}>
      <TargetPhotoContainer match={match} />
      {photoList}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {isLoading && <Spinner />}
    </section>
  );
}
