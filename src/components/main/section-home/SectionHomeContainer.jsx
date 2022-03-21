import SectionHome from './SectionHome';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../../../redux/home-reducer';
import useUser from '../../../hooks/useUser';

function SectionHomeApiContainer({ state, isFetching }) {
  const {
    user: { id, firstName, lastName, photo, sex, dateOfBirth }
  } = useUser();

  useEffect(() => {
    getUser(id);
  }, []);

  return (
    <SectionHome
      state={state}
      firstName={firstName}
      lastName={lastName}
      photo={photo}
      sex={sex}
      dateOfBirth={dateOfBirth}
      isFetching={isFetching}
    />
  );
}

function mapStateToProps(state) {
  return {
    state: state.homePage,
    isFetching: state.homePage.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: (id) => dispatch(getUser(id))
  };
}

export const SectionHomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionHomeApiContainer);
