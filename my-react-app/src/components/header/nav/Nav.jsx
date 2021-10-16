import style from './Nav.module.scss';

import NavList from './nav-list/NavList.jsx';

function Nav() {
  return (
    <nav className={ style.nav }>
      <div className='container'>
        <NavList />
      </div>
    </nav>
  );
}

export default Nav;
