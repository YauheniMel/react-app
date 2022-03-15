import React from 'react';
import style from './Link.module.scss';

import { NavLink } from 'react-router-dom';

export default function Link({ children, path }) {
  return (
    <NavLink className={style.link} to={path} activeClassName={style.active}>
      {children}
    </NavLink>
  );
}
