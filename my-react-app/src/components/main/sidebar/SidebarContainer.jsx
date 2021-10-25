import Sidebar from './Sidebar';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    state: state.friendPage,
  };
}

export const SidebarContainer = connect(mapStateToProps)(Sidebar);
