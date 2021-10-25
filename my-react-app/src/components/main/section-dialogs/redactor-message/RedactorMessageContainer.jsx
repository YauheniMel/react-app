import {
  addMessageContent,
  sendMessage,
} from '../../../../redux/dialogs-reducer';
import RedactorMessage from './RedactorMessage';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    messageContent: state.dialogsPage.messageContent,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createMessage: (event) => {
      event.preventDefault();

      const action = sendMessage();

      dispatch(action);
    },
    setMessage: (elem) => {
      const content = elem.current.value;

      const action = addMessageContent(content);

      dispatch(action);
    },
  };
}

export const RedactorMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RedactorMessage);
