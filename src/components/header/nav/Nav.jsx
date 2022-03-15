import style from './Nav.module.scss';

import NavList from './nav-list/NavList.jsx';
import { ThemeContext } from '../../../contexts/ThemeContext';

export default function Nav() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <nav className={`${style.nav} ${style[theme]}`}>
          <div className="container">
            <NavList />
          </div>
        </nav>
      )}
    </ThemeContext.Consumer>
  );
}
