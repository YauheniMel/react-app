import React from 'react';
import { addMessageContent, sendMessageCreator } from '../../../../redux/dialogs-reducer';
import style from './RedactorMessage.module.css';

function RedactorMessage(props) {
  const textareaMessageEl = React.createRef();

  function createMessage(event) {
    event.preventDefault();

    const action = sendMessageCreator();

    props.dispatch(action);
  }

  function setMessageContent() {
    const content = textareaMessageEl.current.value;

    const action = addMessageContent(content);

    props.dispatch(action);
  }

  return (
    <div className={ style.redactor }>
      <form onSubmit={ createMessage } className={ style.form_redactor }>
        <textarea onChange={ setMessageContent } ref={ textareaMessageEl } className={ style.textarea_redactor } value={ props.messageContent }/>
        <button type="submit" className={ style.button_send }>Send</button>
        <button type="reset" className={ style.button_cancel }>Cancel</button>
      </form>
    </div>
  );
}

export default RedactorMessage;
