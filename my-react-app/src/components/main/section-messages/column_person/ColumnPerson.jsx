import style from './ColumnPerson.module.css';
import Person from './person/Person';

function ColumnPerson(props) {
  const people = props.persons.map((person) => {
    return <Person key={ person.id } data={ person }/>;
  });

  return (
    <div className={ style.column }>
      { people }
    </div>
  );
}

export default ColumnPerson;
