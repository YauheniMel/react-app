import style from '../ColumnDialog.module.scss';

function SentMessage(props) {
  return (
    <div className={style.message_sent}>
      <div className={style.message}>
        <p>{props.data.content}</p>
      </div>
    </div>
  );
}

export default SentMessage;
