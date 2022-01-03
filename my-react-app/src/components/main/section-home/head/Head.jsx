import style from '../SectionHome.module.scss';

function Head({ firstName, lastName, dateOfBirth, sex }) {
  return (
    <div className={style.user}>
      <p>{`${firstName} ${lastName}`}</p>
      <p>
        {dateOfBirth} {sex}
      </p>
    </div>
  );
}

export default Head;
