import style from './SectionHome.module.scss';
import Spinner from '../../../common/Spinner/Spinner';

export default function SectionHome({
  firstName,
  lastName,
  sex,
  dateOfBirth,
  isFetching,
  photo
}) {
  return (
    <section className={style.section}>
      <img src={photo} alt="" />
      <div className={style.user}>
        <p>{`${firstName} ${lastName}`}</p>
        <p>{dateOfBirth}</p>
        <p>{sex}</p>
      </div>
      {isFetching && <Spinner />}
    </section>
  );
}
