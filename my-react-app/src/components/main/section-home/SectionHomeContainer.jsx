import SectionHome from './SectionHome';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    state: state.homePage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
  };
}

export const SectionHomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionHome);
