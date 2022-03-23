import Sidebar from './Sidebar';
import { connect } from 'react-redux';

function SidebarApiContainer({ state }) {
  return <Sidebar state={state} />;
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

export const SidebarContainer = connect(mapStateToProps)(SidebarApiContainer);
