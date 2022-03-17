import React from 'react';
import style from './RedactorMessage.module.scss';

export default function RedactorMessage({
  messageContent,
  sendMessage,
  createMessage
}) {
  const textareaMessageEl = React.createRef();

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <textarea
        onChange={() => createMessage(textareaMessageEl)}
        ref={textareaMessageEl}
        className={style.textarea_redactor}
        value={messageContent}
      />
      <div className={style.action}>
        <button type="submit">Send</button>
        <button type="reset">Cancel</button>
      </div>
    </form>
  );
}
