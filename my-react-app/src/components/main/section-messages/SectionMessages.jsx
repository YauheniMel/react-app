import ColumnDialog from './column_dialog/ColumnDialog';
import ColumnPerson from './column_person/ColumnPerson';
import style from './SectionMessages.module.css';

function SectionMessages() {
  return (
    <div className={ style.section_wrap }>
      <section className={ style.section }>
        <ColumnPerson />
        <ColumnDialog />
      </section>
    </div>
  );
}

export default SectionMessages;
