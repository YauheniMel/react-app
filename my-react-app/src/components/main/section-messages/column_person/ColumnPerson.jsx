import style from './ColumnPerson.module.css';
import Person from './person/Person';

function ColumnPerson() {
  return (
    <div className={ style.column }>
      <Person firstName="Dima" lastName="Muller" id="1"/>
      <Person firstName="Serg" lastName="Melnik" id="2"/>
      <Person firstName="Max" lastName="Kotov" id="3"/>
      <Person firstName="Bil" lastName="Smirnov" id="4"/>
      <Person firstName="Tom" lastName="Ivanov" id="5"/>
      <Person firstName="Bob" lastName="Miron" id="6"/>
    </div>
  );
}

export default ColumnPerson;
