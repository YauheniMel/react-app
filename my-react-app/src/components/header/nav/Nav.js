import './Nav.css';
import NavList from './nav-list/NavList';

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <NavList />
      </div>
    </nav>
  );
}

export default Nav;
