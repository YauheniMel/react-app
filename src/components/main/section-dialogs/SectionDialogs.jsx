import Spinner from '../../../common/Spinner/Spinner';
import ColumnDialog from './column_dialog/ColumnDialog';
import ColumnPerson from './column_person/ColumnPerson';
import { RedactorMessageContainer } from './redactor-message/RedactorMessageContainer';
import style from './SectionDialogs.module.scss';

export default function SectionDialogs({ state, isFetching }) {
  return (
    <>
      {isFetching && <Spinner />}
      <section className={style.section}>
        <ColumnPerson persons={state.persons} />
        <div className={style.dialog}>
          <ColumnDialog messages={state.messages} />
          <RedactorMessageContainer state={state} />
        </div>
      </section>
    </>
  );
}
