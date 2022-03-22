import { connect } from 'react-redux';
import { changePage, setCurrentPage } from '../../../redux/photo-reducer';
import { useEffect } from 'react';
import SectionPhotos from './SectionPhotos';
import { withRouter } from 'react-router';
import useUser from '../../../hooks/useUser';

function SectionPhotosAPIContainer({
  photos,
  changePage,
  match,
  currentPage,
  totalPages,
  isFetching,
  setCurrentPage
}) {
  const {
    user: { id }
  } = useUser();

  function handleChangePage(currentPage = 1) {
    setCurrentPage(currentPage);

    changePage(id, currentPage);
  }

  useEffect(() => {
    handleChangePage(currentPage);
  }, [currentPage]);

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
    changePage: (id, currentPage) => dispatch(changePage(id, currentPage)),
    setCurrentPage: (numPage) => dispatch(setCurrentPage(numPage))
  };
}

export const SectionPhotosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SectionPhotosAPIContainer));
