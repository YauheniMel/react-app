import style from './Sidebar.module.css';

function Sidebar() {
  return (
    <aside className={ style.aside }>
      <ul className={ style.list }>
        <li className={ style.item }><a className={ style.link } href="#j">Introduction</a></li>
        <li className={ style.item }><a className={ style.link } href="#j">Elementary level</a></li>
        <li className={ style.item }><a className={ style.link } href="#j">Middle level</a></li>
        <li className={ style.item }><a className={ style.link } href="#j">Advanced level</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
