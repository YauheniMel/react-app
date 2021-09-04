import style from './Nav.module.css';

import NavList from './nav-list/NavList.jsx';

function Nav() {
  return (
    <nav className={ style.nav }>
      <div className={ style.container }>
        <NavList />
      </div>
    </nav>
  );
}

export default Nav;
