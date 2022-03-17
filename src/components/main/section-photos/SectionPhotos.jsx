import Pagination from '../../../common/Pagination/Pagination';
import PhotoCard from '../../../common/PhotoCard/PhotoCard';
import style from './SectionPhotos.module.scss';
import Spinner from '../../../common/Spinner/Spinner';
import { TargetPhotoContainer } from './TargetPhoto/TargetPhotoContainer';
import { NavLink } from 'react-router-dom';

export default function SectionPhotos({
  photos,
  currentPage,
  setCurrentPage,
  isFetching,
  match
}) {
  const photoList = photos.map((photo) => {
    return (
      <NavLink key={photo.id} to={`/photos/${photo.id}`}>
        <PhotoCard content={photo.title} photoURL={photo.url} />
      </NavLink>
    );
  });

  return (
    <section className={style.section}>
      <TargetPhotoContainer match={match} />
      <div className={style.wrap}>{photoList}</div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {isFetching && <Spinner />}
    </section>
  );
}
