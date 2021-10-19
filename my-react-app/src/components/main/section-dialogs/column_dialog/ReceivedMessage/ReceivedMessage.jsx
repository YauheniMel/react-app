import style from '../ColumnDialog.module.scss';

function ReceivedMessage(props) {
  return (
    <div className={style.message_received}>
      <div className={style.message}>
        <p>{props.data.content}</p>
      </div>
    </div>
  );
}

export default ReceivedMessage;
