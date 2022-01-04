import { connect } from 'react-redux';
import { getPhotos } from '../../../redux/photo-reducer';
import { useState, useEffect } from 'react';
import SectionPhotos from './SectionPhotos';
import { withRouter } from 'react-router';
import useUser from '../../../hooks/useUser';
import { requestAPI } from '../../../api/api';

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
  const {
    user: { id },
  } = useUser();

  function handleChangePage() {
    setIsLoading(true);

    requestAPI
      .getPhotos(id, currentPage)
      .then((data) => {
        getPhotos(data);

        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);

        setIsLoading(false);
      });
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
