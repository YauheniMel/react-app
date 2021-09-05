import style from '../ColumnDialog.module.css';

function ReceivedMessage(props) {
  return (
    <div className={ style.message_received }>
      <p>{ props.text }</p>
    </div>
  );
}

export default ReceivedMessage;
