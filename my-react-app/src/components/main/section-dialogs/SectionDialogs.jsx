import ColumnDialog from './column_dialog/ColumnDialog';
import ColumnPerson from './column_person/ColumnPerson';
import RedactorMessage from './redactor-message/RedactorMessage';
import style from './SectionDialogs.module.css';

function SectionDialogs(props) {
  return (
    <div className="section_wrap">
      <section className={ style.section }>
        <ColumnPerson persons={ props.state.persons }/>
        <ColumnDialog messages={ props.state.messages }/>
        <RedactorMessage messageContent={ props.state.messageContent }
                         dispatch={ props.dispatch }
                         />
      </section>
    </div>
  );
}

export default SectionDialogs;
