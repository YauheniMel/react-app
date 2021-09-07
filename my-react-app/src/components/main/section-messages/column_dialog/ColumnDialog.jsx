import style from './ColumnDialog.module.css';
import ReceivedMessage from './ReceivedMessage/ReceivedMessage';
import SentMessage from './SentMessage/SentMessage';

function ColumnDialog() {
  const resMessages = [
    { id: '1', content: 'Привет! Как дела? Привет. Нормально. А у тебя? Привет. Нормально. А у тебя?', isMy: true},
    { id: '2', content: 'Привет. Нормально. А у тебя?', isMy: false},
    { id: '3', content: 'Тоже. Что делаешь?', isMy: true},
    { id: '4', content: 'Пойдем играть на улицу.', isMy: false},
    { id: '5', content: 'Ноу', isMy: false},
    { id: '6', content: 'Ну тогда сиди дома', isMy: true},
    { id: '7', content: 'Играю.', isMy: false},
    { id: '8', content: 'НоуПривет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?Привет. Нормально. А у тебя?', isMy: true},
    { id: '9', content: 'Пойдем играть на улицу.', isMy: true},
  ];

  const listMessages = resMessages.map((dataItem) => {
    if(dataItem.isMy) {
      return <SentMessage key={ dataItem.id } data={ dataItem } />
    } else {
      return <ReceivedMessage key={ dataItem.id } data={ dataItem }/>
    }
  });

  return (
    <div className={ style.column }>
      { listMessages }
    </div>
  );
}

export default ColumnDialog;
