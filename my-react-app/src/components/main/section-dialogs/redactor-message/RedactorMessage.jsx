import React from 'react';
import style from './RedactorMessage.module.scss';

export default function RedactorMessage({ setMessageContent, createMessage, messageContent }) {
  const textareaMessageEl = React.createRef();

  return (
    <div className={ style.redactor }>
      <form onSubmit={ createMessage } className={ style.form_redactor }>
        <textarea onChange={ () => setMessageContent(textareaMessageEl) } ref={ textareaMessageEl } className={ style.textarea_redactor } value={ messageContent }/>
        <button type="submit" className={ style.button_send }>Send</button>
        <button type="reset" className={ style.button_cancel }>Cancel</button>
      </form>
    </div>
  );
}
