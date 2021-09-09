import React from 'react';
import style from './ColumnDialog.module.css';
import ReceivedMessage from './ReceivedMessage/ReceivedMessage';
import SentMessage from './SentMessage/SentMessage';

function ColumnDialog(props) {

  const textareaMessageEl = React.createRef();

  function createMessage(event) {
    event.preventDefault();

    const message = textareaMessageEl.current.value;

    console.log(message);
  }

  const listMessages = props.messages.map((message) => {
    if(message.isMy) {
      return <SentMessage key={ message.id } data={ message } />
    } else {
      return <ReceivedMessage key={ message.id } data={ message }/>
    }
  });

  return (
    <div className={ style.column }>
      { listMessages }
      <div className={ style.redactor }>
        <form onSubmit={ createMessage } className={ style.form_redactor }>
          <textarea ref={ textareaMessageEl } className={ style.textarea_redactor }></textarea>
          <button type="submit" className={ style.button_send }>Send</button>
          <button type="reset" className={ style.button_cancel }>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default ColumnDialog;
