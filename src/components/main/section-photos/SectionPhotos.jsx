import Pagination from '../../../common/Pagination/Pagination';
import PhotoCard from '../../../common/PhotoCard/PhotoCard';
import Spinner from '../../../common/Spinner/Spinner';
import { TargetPhotoContainer } from './TargetPhoto/TargetPhotoContainer';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';

export default function SectionPhotos({
  photos,
  currentPage,
  setCurrentPage,
  isFetching,
  match
}) {
  const photoList = photos.map((photo) => {
    return (
      <NavLink key={photo.id} to={`/reactproject/photos/${photo.id}`}>
        <PhotoCard content={photo.title} photoURL={photo.url} />
      </NavLink>
    );
  });

  return (
    <section className="section">
      <Route
        path="/reactproject/photos/:photoId"
        render={() => <TargetPhotoContainer match={match} />}
      />
      <div className="wrap">{photoList}</div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {isFetching && <Spinner />}
    </section>
  );
}
