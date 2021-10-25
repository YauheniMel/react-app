import { connect } from 'react-redux';
import Desk from './Desk';
import {
  createCredoContent,
  createPostContent,
  setCredoContent,
  setPostContent
} from '../../../../redux/home-reducer';

function mapStateToProps(state) {
  return {
    state: state.homePage,
    inputCredo: state.homePage.initCredo,
    inputPost: state.homePage.initPost,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createPost: (elem) => {
      const content = elem.current.value;

      const action = createPostContent(content);

      dispatch(action);
    },
    createCredo: (elem) => {
      const content = elem.current.value;

      const action = createCredoContent(content);

      dispatch(action);
    },
    setPost: (event) => {
      event.preventDefault();

      const action = setPostContent();

      dispatch(action);
    },
    setCredo: (event) => {
      event.preventDefault();

      const action = setCredoContent();

      dispatch(action);
    },
  };
}

export const DeskContainer = connect(mapStateToProps, mapDispatchToProps)(Desk);
