import { connect } from 'react-redux';
import {
  getTargetPhotos,
  setCurrentPhotoPage
} from '../../../redux/photo-reducer';
import { useEffect } from 'react';
import SectionPhotos from './SectionPhotos';
import { withRouter } from 'react-router';
import useUser from '../../../hooks/useUser';

function SectionPhotosAPIContainer({
  photos,
  getTargetPhotos,
  match,
  currentPage,
  totalPages,
  isFetching,
  setCurrentPage
}) {
  const {
    user: { id }
  } = useUser();

  useEffect(() => {
    handleChangePage(currentPage);
  }, []);

  function handleChangePage(currentPage) {
    setCurrentPage(currentPage);

    getTargetPhotos(id, currentPage);
  }

  return (
    <SectionPhotos
      photos={photos}
      currentPage={currentPage}
      changePage={handleChangePage}
      totalPages={totalPages}
      isFetching={isFetching}
      match={match}
    />
  );
}

function mapStateToProps(state) {
  return {
    photos: state.photoPage.photos,
    currentPage: state.photoPage.currentPage,
    totalPages: state.photoPage.totalPages,
    isFetching: state.photoPage.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTargetPhotos: (id, currentPage) =>
      dispatch(getTargetPhotos(id, currentPage)),
    setCurrentPage: (numPage) => dispatch(setCurrentPhotoPage(numPage))
  };
}

export const SectionPhotosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SectionPhotosAPIContainer));
