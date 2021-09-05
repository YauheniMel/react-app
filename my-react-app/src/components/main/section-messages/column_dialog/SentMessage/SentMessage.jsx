import style from '../ColumnDialog.module.css';

function SentMessage(props) {
  return (
    <div className={ style.message_sent }>
      <p>
        { props.text }
      </p>
    </div>
  );
}

export default SentMessage;
