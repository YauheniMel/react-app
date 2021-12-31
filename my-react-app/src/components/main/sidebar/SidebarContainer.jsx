import Sidebar from './Sidebar';
import { connect } from 'react-redux';

function SidebarApiContainer({ state }) {
  return <Sidebar state={state} />;
}

function mapStateToProps(state) {
  return {
    state: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarApiContainer);
