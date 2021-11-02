import SectionHome from './SectionHome';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getPhotos } from '../../../redux/home-reducer';

function SectionHomeApiContainer({ state, dispatch, getPhotos }) {
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);

    axios
      .get('/photos')
      .then((response) => response.data)
      .then((data) => getPhotos(data))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [])

  return (
    <SectionHome
      state={state}
      dispatch={dispatch}
    />
  );
}

function mapStateToProps(state) {
  return {
    state: state.homePage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    getPhotos: (arr) => {
      const action = getPhotos(arr);

      dispatch(action);
    }
  };
}

export const SectionHomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionHomeApiContainer);
