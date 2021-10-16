import style from './Person.module.scss';

import { NavLink } from 'react-router-dom';

function Person(props) {

  return (
    <div className={ style.person }>
      <NavLink to={ "/messages/" + props.data.id } className={ style.link }>{ props.data.firstName } { props.data.lastName }</NavLink>
    </div>
  );
}

export default Person;
