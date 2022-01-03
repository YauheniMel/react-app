import Desk from './Desk';
import { connect } from 'react-redux';
import {
  createCredoContent,
  createPostContent,
  setCredoContent,
  setPostContent,
} from '../../../../redux/home-reducer';

function mapStateToProps(state, ownProps) {
  return {
    state: state.homePage,
    avatar: ownProps.avatar,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCredoContent: (elem) => {
      const value = elem.current.value;

      const action = createCredoContent(value);

      dispatch(action);
    },
    createPostContent: (elem) => {
      const value = elem.current.value;

      const action = createPostContent(value);

      dispatch(action);
    },
    setCredo: () => {
      event.preventDefault();

      const action = setCredoContent();

      dispatch(action);
    },
    setPost: () => {
      event.preventDefault();

      const action = setPostContent();

      dispatch(action);
    },
  };
}

export const DeskContainer = connect(mapStateToProps, mapDispatchToProps)(Desk);
