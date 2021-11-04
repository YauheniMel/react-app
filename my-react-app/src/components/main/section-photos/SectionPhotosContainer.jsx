import { connect } from 'react-redux';
import { getPhotos } from '../../../redux/photo-reducer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SectionPhotos from './SectionPhotos';
import { withRouter } from 'react-router';

function mapStateToProps(state) {
  return {
    photos: state.photoPage.photos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPhotos: (arr) => {
      const action = getPhotos(arr);

      dispatch(action);
    },
  };
}

function SectionPhotosAPIContainer({ photos, getPhotos, match }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState();

  function handleChangePage(num) {
    setIsLoading(true);
    axios
      .get(`/photos/${currentPage}`)
      .finally(() => setIsLoading(false))
      .then((response) => response.data)
      .then((data) => getPhotos(data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    handleChangePage(currentPage);
  }, [currentPage]);

  return (
    <SectionPhotos
      photos={photos}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      isLoading={isLoading}
      match={match}
    />
  );
}

export const SectionPhotosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SectionPhotosAPIContainer));
