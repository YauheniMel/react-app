import style from './SectionHome.module.scss';
import Spinner from '../../../common/Spinner/Spinner';

export default function SectionHome({
  firstName,
  lastName,
  sex,
  dateOfBirth,
  isFetching,
  avatar
}) {
  return (
    <section className={style.section}>
      <img src={avatar} alt="" />
      <div className={style.user}>
        <p>{`${firstName} ${lastName}`}</p>
        <p>{dateOfBirth}</p>
        <p>{sex}</p>
      </div>
      {isFetching && <Spinner />}
    </section>
  );
}
