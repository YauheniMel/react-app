import SearchInput from './search-input/SearchInput';
import './Header.css';
import Nav from './nav/Nav';

function Header() {
  return (
    <div>
      <header className="header">
        <div className="container header__container">
          <h2 className="header__title">React project</h2>
          <SearchInput />
        </div>
      </header>
      <Nav />
    </div>

  );
}

export default Header;
