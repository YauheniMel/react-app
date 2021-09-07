import style from './Header.module.css';

import Input from './input/Input.jsx';
import Nav from './nav/Nav.jsx';

function Header() {
  return (
    <div>
      <header className={ style.header }>
        <div className={ style.container }>
          <h2 className={ style.logo }>React project</h2>
          <Input />
        </div>
      </header>
      <Nav />
    </div>

  );
}

export default Header;
