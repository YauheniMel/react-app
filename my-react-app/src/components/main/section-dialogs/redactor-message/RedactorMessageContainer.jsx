import { createMessage, sendMessage } from '../../../../redux/dialogs-reducer';
import RedactorMessage from './RedactorMessage';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    messageContent: state.dialogsPage.messageContent,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: () => {
      event.preventDefault();

      const action = sendMessage();

      dispatch(action);
    },
    createMessage: (elem) => {
      const value = elem.current.value;

      const action = createMessage(value);

      dispatch(action);
    }
  }
}

export const RedactorMessageContainer = connect(mapStateToProps, mapDispatchToProps)(RedactorMessage);
