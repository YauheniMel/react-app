import SectionHome from './SectionHome';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getPhotos } from '../../../redux/home-reducer';
import useUser from '../../../hooks/useUser';

function SectionHomeApiContainer({ state, getPhotos }) {
  const [isLoading, setIsLoading] = useState();
  const { user: {id, firstName, lastName, avatar, sex, dateOfBirth} } = useUser();

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`/photos/id${id}/1`)
      .then((response) => response.data)
      .then((data) => {
        getPhotos(data)})
      .catch((err) => console.error(err));

    setIsLoading(false); // async func!
  }, []);

  return <SectionHome
    state={state}
    firstName={firstName}
    lastName={lastName}
    avatar={avatar}
    sex={sex}
    dateOfBirth={dateOfBirth}
  />;
}

function mapStateToProps(state) {
  return {
    state: state.homePage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
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
