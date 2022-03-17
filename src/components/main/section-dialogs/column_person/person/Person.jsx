import style from './Person.module.scss';

import { NavLink } from 'react-router-dom';

function Person(props) {
  // make id and getDialog-action
  return (
    <div className={style.person}>
      <NavLink
        to={`/reactproject/dialogs/dialog/` + props.data.id}
        className={style.link}
      >
        {props.data.firstName} {props.data.lastName}
      </NavLink>
    </div>
  );
}

export default Person;
