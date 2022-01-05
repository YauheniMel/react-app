import { connect } from 'react-redux';
import { getAllPhotos } from '../../../redux/photo-reducer';
import { useState, useEffect } from 'react';
import SectionPhotos from './SectionPhotos';
import { withRouter } from 'react-router';
import useUser from '../../../hooks/useUser';

function SectionPhotosAPIContainer({ photos, getPhotos, match, isFetching }) {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    user: { id },
  } = useUser();

  function handleChangePage(currentPage) {
    getPhotos(id, currentPage);
  }

  useEffect(() => {
    handleChangePage(currentPage);
  }, [currentPage]);

  return (
    <SectionPhotos
      photos={photos}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      isFetching={isFetching}
      match={match}
    />
  );
}

function mapStateToProps(state) {
  return {
    photos: state.photoPage.photos,
    isFetching: state.photoPage.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPhotos: (id, currentPage) => dispatch(getAllPhotos(id, currentPage)),
  };
}

export const SectionPhotosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SectionPhotosAPIContainer));
