import SectionPhotosAPIContainer from './SectionPhotosAPIContainer';
import { connect } from 'react-redux';
import { getPhotos } from '../../../redux/photo-reducer';

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

export const SectionPhotosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionPhotosAPIContainer);
