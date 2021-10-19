import SectionMyFriends from './SectionMyFriends';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    friends: state.friendPage.friends,
  };
}

export const SectionMyFriendsContainer = connect(mapStateToProps)(SectionMyFriends);
