import ColumnDialog from './column_dialog/ColumnDialog';
import ColumnPerson from './column_person/ColumnPerson';
import style from './SectionMessages.module.css';

function SectionMessages(props) {
  return (
    <div className="section_wrap">
      <section className={ style.section }>
        <ColumnPerson persons={ props.persons }/>
        <ColumnDialog messages={ props.messages }/>
      </section>
    </div>
  );
}

export default SectionMessages;
