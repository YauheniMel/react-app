import SectionDialogs from './SectionDialogs';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getDialogPersons } from '../../../redux/dialogs-reducer';
import useUser from '../../../hooks/useUser';
import { requestAPI } from '../../../api/api';

function SectionDialogsApiContainer({ state, getDialogPersons }) {
  const [isLoading, setIsLoading] = useState(true); // maybe should make global useState
  const {
    user: { id },
  } = useUser();
  // need to fetch person's dialog
  useEffect(() => {
    setIsLoading(true);

    requestAPI
      .getDialogPersons(id)
      .then((data) => {
        getDialogPersons(data);

        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return <SectionDialogs state={state} isLoading={isLoading}/>;
}

function mapStateToProps(state) {
  return {
    state: state.dialogsPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDialogPersons: (arr) => {
      const action = getDialogPersons(arr);

      dispatch(action);
    },
  };
}

export const SectionDialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionDialogsApiContainer);
