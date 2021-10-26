import SectionMyFriends from './SectionMyFriends';
import { connect } from 'react-redux';
import { getFriends } from '../../../redux/friend-reducer';

function mapStateToProps(state) {
  return {
    friends: state.friendPage.friends,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFriends: (arr) => {
      const action = getFriends(arr);

      dispatch(action);
    },
  };
}

export const SectionMyFriendsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionMyFriends);
