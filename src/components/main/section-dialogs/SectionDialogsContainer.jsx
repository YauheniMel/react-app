import SectionDialogs from './SectionDialogs';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { getPersons } from '../../../redux/dialogs-reducer';
import useUser from '../../../hooks/useUser';

function SectionDialogsApiContainer({ state, getPersons, isFetching }) {
  const {
    user: { id }
  } = useUser();
  // need to fetch person's dialog
  useEffect(() => {
    getPersons(id);
  }, []);

  return <SectionDialogs state={state} isFetching={isFetching} />;
}

function mapStateToProps(state) {
  return {
    state: state.dialogsPage,
    isFetching: state.dialogsPage.isFetching
  };
}

export const SectionDialogsContainer = connect(mapStateToProps, {
  getPersons
})(SectionDialogsApiContainer);
