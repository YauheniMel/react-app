import { connect } from 'react-redux';
import { followUser, getUsers, unFollowUser } from '../../../redux/users-reducer';
import SectionUsers from './SectionUsers';

function mapStateToProps(state) {
  return {
    users: state.usersPage.users,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    follow: (id) => {
      const action = followUser(id);

      dispatch(action);
    },
    unfollow: (id) => {
      const action = unFollowUser(id);

      dispatch(action);
    },
    getUsers: (arr) => {
      const action = getUsers(arr);

      dispatch(action);
    }
  }
}

export const SectionUsersContainer = connect(mapStateToProps, mapDispatchToProps)(SectionUsers);
