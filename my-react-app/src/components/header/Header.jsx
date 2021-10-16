import Toggle from '../../common/Toggle/Toggle.jsx';
import style from './Header.module.scss';

import Input from './input/Input.jsx';
import Nav from './nav/Nav.jsx';

function Header() {
  return (
    <header className={ style.header }>
      <div className={`${ style.container } container`}>
        <h2 className={ style.logo }>React project</h2>
        <Toggle
          choice={['eng', 'рус']}
          title='Select language'
          checked={ true }
        />
        <Toggle
          choice={['dark', 'light']}
          title='Theme'
        />
        <Input />
      </div>
      <Nav />
    </header>
  );
}

export default Header;
