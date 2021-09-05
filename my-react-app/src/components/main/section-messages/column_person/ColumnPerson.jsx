import style from './ColumnPerson.module.css';
import Person from './person/Person';

function ColumnPerson() {
  return (
    <div className={ style.column }>
      <Person firstName="Dima" lastName="Muller"/>
      <Person firstName="Serg" lastName="Melnik"/>
      <Person firstName="Max" lastName="Kotov"/>
      <Person firstName="Bil" lastName="Smirnov"/>
      <Person firstName="Tom" lastName="Ivanov"/>
      <Person firstName="Bob" lastName="Miron"/>
    </div>
  );
}

export default ColumnPerson;
