import style from './ColumnPerson.module.css';
import Person from './person/Person';

function ColumnPerson() {
  const resPerson = [
    { firstName: 'Dima', lastName: 'Muller', id: '1'},
    { firstName: 'Serg', lastName: 'Melnik', id: '2'},
    { firstName: 'Max', lastName: 'Kotov', id: '3'},
    { firstName: 'Bill', lastName: 'Smirnov', id: '4'},
    { firstName: 'Tom', lastName: 'Ivanov', id: '5'},
    { firstName: 'Bob', lastName: 'Miron', id: '6'},
  ];

  const persons = resPerson.map((person) => {
    return <Person key={ person.id } data={ person }/>;
  });

  return (
    <div className={ style.column }>
      { persons }
    </div>
  );
}

export default ColumnPerson;
