import style from './Sidebar.module.css';

function Sidebar() {
  return (
    <aside className={ style.aside }>
      <ul className={ style.list }>
        <li className={ style.item }><a className={ style.link } href="#j">Home</a></li>
        <li className={ style.item }><a className={ style.link } href="#j">Messages</a></li>
        <li className={ style.item }><a className={ style.link } href="#j">My friends</a></li>
        <li className={ style.item }><a className={ style.link } href="#j">Photos</a></li>
        <li className={ style.item }><a className={ style.link } href="#j">Setting</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
