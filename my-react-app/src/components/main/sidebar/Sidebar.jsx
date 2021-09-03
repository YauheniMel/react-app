import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="aside">
      <ul className="aside__list">
        <li className="aside__item"><a className="aside__link" href="#j">Introduction</a></li>
        <li className="aside__item"><a className="aside__link" href="#j">Elementary level</a></li>
        <li className="aside__item"><a className="aside__link" href="#j">Middle level</a></li>
        <li className="aside__item"><a className="aside__link" href="#j">Advanced level</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
