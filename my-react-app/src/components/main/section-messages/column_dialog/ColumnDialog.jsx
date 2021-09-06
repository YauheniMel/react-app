import style from './ColumnDialog.module.css';
import ReceivedMessage from './ReceivedMessage/ReceivedMessage';
import SentMessage from './SentMessage/SentMessage';

function ColumnDialog() {
  return (
    <div className={ style.column }>
      <SentMessage text="Привет! Как дела? Привет. Нормально. А у тебя? Привет. Нормально. А у тебя?" />
      <ReceivedMessage text="Привет. Нормально. А у тебя?" />
      <SentMessage text="Тоже. Что делаешь?" />
      <SentMessage text="Тоже. Что делаешь?" />
      <SentMessage text="Тоже. Что делаешь?" />
      <ReceivedMessage text="Играю." />
      <SentMessage text="Пойдем играть на улицу." />
      <ReceivedMessage text="НоуПривет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?" />
      <SentMessage text="Ну тогда сиди дома" />
      <ReceivedMessage text="..." />
      <SentMessage text="Привет! Как дела?" />
      <ReceivedMessage text="Привет. Нормально. А у тебя?" />
      <SentMessage text="Тоже. Что делаешь? Привет. Нормально. А у тебя? Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?" />
      <ReceivedMessage text="Играю." />
      <SentMessage text="Пойдем играть на улицу." />
      <ReceivedMessage text="Ноу" />
      <SentMessage text="Ну тогда сиди дома" />
      <ReceivedMessage text="..." />
    </div>
  );
}

export default ColumnDialog;
