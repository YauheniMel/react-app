import React from 'react';
import { addMessageContent, sendMessageCreator } from '../../../../redux/dialogs-reducer';
import RedactorMessage from './RedactorMessage';

export default function RedactorMessageContainer({ messageContent, dispatch }) {
  function createMessage(event) {
    event.preventDefault();

    const action = sendMessageCreator();

    dispatch(action);
  }

  function setMessageContent(elem) {
    const content = elem.current.value;

    const action = addMessageContent(content);

    dispatch(action);
  }

  return (
    <RedactorMessage
      setMessageContent={ setMessageContent }
      createMessage={ createMessage }
      messageContent={ messageContent }
    />
  );
}
