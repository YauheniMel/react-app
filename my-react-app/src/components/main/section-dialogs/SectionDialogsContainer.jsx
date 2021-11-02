import SectionDialogs from './SectionDialogs';
import { connect } from 'react-redux';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getDialogs } from '../../../redux/dialogs-reducer';

function SectionDialogsApiContainer({ state, dispatch, getDialogs }) {
  const [isLoading, setIsLoading] = useState(true); // maybe should make global useState

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/dialogs')
      .finally(() => setIsLoading(false))
      .then((response) => response.data)
      .then((data) => {
        getDialogs(...data);
      })
      .catch((err) => console.error(`Error: ${err}`));
  }, []);

  return <SectionDialogs state={state} dispatch={dispatch} />;
}

function mapStateToProps(state) {
  return {
    state: state.dialogsPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    getDialogs: (arr) => {
      const action = getDialogs(arr);

      dispatch(action);
    },
  };
}

export const SectionDialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionDialogsApiContainer);
