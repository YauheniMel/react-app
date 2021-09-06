import style from './Person.module.css';

import { NavLink } from 'react-router-dom';

function Person(props) {
  return (
    <div className={ style.person }>
      <NavLink to={ "/messages/" + props.id } className={ style.link }>{ props.firstName } { props.lastName }</NavLink>
    </div>
  );
}

export default Person;
