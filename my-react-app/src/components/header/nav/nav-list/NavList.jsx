import style from '../Nav.module.scss';

function NavList() {
  return (
    <ul className={ style.list }>
      <li className={ style.item }><a href="#" className={ style.link }>--</a></li>
      <li className={ style.item }><a href="#" className={ style.link }>++</a></li>
    </ul>
  );
}

export default NavList;
