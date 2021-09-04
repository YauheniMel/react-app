import style from '../Nav.module.css';

function NavList() {
  return (
    <ul className={ style.list }>
      <li className={ style.item }><a href="https://learn.javascript.ru" className={ style.link }>LearnJS</a></li>
      <li className={ style.item }><a href="https://ru.reactjs.org/" className={ style.link }>React</a></li>
      <li className={ style.item }><a href="https://vuejs.org" className={ style.link }>VueJS</a></li>
    </ul>
  );
}

export default NavList;
