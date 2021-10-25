import SectionPhotos from './SectionPhotos';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    photos: state.photoPage.photos,
  };
}

export const SectionPhotosContainer = connect(mapStateToProps)(SectionPhotos);