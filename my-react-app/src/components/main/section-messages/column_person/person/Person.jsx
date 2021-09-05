import style from './Person.module.css';

function Person(props) {
  return (
    <div className={ style.person }>
      { props.firstName } { props.lastName }
    </div>
  );
}

export default Person;
