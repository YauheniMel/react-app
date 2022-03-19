import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTargetPhoto } from '../../../../redux/photo-reducer';
import TargetPhoto from './TargetPhoto';

function TargetPhotoApiContainer({ targetPhoto, match, getTargetPhoto }) {
  useEffect(() => {
    if (!match.params.photoId) return;

    getTargetPhoto(match.params.photoId);
  }, [match.params.photoId]);

  return (
    <>{match.params.photoId && <TargetPhoto targetPhoto={targetPhoto} />}</>
  );
}

function mapStateToProps(state) {
  return {
    targetPhoto: state.photoPage.targetPhoto
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTargetPhoto: (obj) => {
      const action = getTargetPhoto(obj);

      dispatch(action);
    }
  };
}

export const TargetPhotoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TargetPhotoApiContainer);
