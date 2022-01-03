import { connect } from 'react-redux';
import { getPhotos } from '../../../redux/photo-reducer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SectionPhotos from './SectionPhotos';
import { withRouter } from 'react-router';
import useUser from '../../../hooks/useUser';

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
  const { user: {id} } = useUser();

  function handleChangePage() {
    setIsLoading(true);
    axios
      .get(`/photos/id${id}/${currentPage}`)
      .then((response) => response.data)
      .then((data) => getPhotos(data))
      .catch((err) => console.error(err));

    setIsLoading(false);
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
