import SectionDialogs from './SectionDialogs';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    state: state.dialogsPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  }
}

export const SectionDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(SectionDialogs);