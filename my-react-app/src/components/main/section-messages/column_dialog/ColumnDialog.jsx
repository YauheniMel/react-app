import style from './ColumnDialog.module.css';
import ReceivedMessage from './ReceivedMessage/ReceivedMessage';
import SentMessage from './SentMessage/SentMessage';

function ColumnDialog(props) {

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
    </div>
  );
}

export default ColumnDialog;
