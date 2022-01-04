import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { requestAPI } from '../../../../api/api';
import { getTargetPhoto } from '../../../../redux/photo-reducer';
import TargetPhoto from './TargetPhoto';

function TargetPhotoApiContainer({ targetPhoto, match, getTargetPhoto }) {
  const [isLoading, setIsLoading] = useState();
  // const [targetId, setTargetId] = useState();

  useEffect(() => {
    setIsLoading(true);
    if (!match.params.photoId) return;

    requestAPI
      .getTargetPhoto(match.params.photoId)
      .then((data) => {
        getTargetPhoto(...data);

        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [match.params.photoId]);

  return (
    <>
      {match.params.photoId && (
        <TargetPhoto targetPhoto={targetPhoto} isLoading={isLoading} />
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    targetPhoto: state.photoPage.targetPhoto,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTargetPhoto: (obj) => {
      const action = getTargetPhoto(obj);

      dispatch(action);
    },
  };
}

export const TargetPhotoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TargetPhotoApiContainer);
