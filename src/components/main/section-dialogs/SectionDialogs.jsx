import Spinner from '../../../common/Spinner/Spinner';
import ColumnDialog from './column_dialog/ColumnDialog';
import ColumnPerson from './column_person/ColumnPerson';
import { RedactorMessageContainer } from './redactor-message/RedactorMessageContainer';
import style from './SectionDialogs.module.css';

export default function SectionDialogs({ state, isFetching }) {
  return (
    <div className="section_wrap">
      <section className={style.section}>
        <ColumnPerson persons={state.persons} />
        <ColumnDialog messages={state.messages} />
        <RedactorMessageContainer state={state} />
      </section>
      {isFetching && <Spinner />}
    </div>
  );
}
