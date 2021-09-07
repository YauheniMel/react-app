import style from './Sidebar.module.css';

import { NavLink } from 'react-router-dom';
import FriendsArea from './friends-area/FriendsArea';

function Sidebar(props) {
  return (
    <aside className={ style.aside }>
      <ul className={ style.list }>
        <li className={ style.item }><NavLink className={ style.link } to="/home" activeClassName={ style.active }>Home</NavLink></li>
        <li className={ style.item }><NavLink className={ style.link } to="/messages" activeClassName={ style.active }>Messages</NavLink></li>
        <li className={ style.item }><NavLink className={ style.link } to="/my_friends" activeClassName={ style.active }>My friends</NavLink></li>
        <li className={ style.item }><NavLink className={ style.link } to="/photos" activeClassName={ style.active }>Photos</NavLink></li>
        <li className={ style.item }><NavLink className={ style.link } to="/settings" activeClassName={ style.active }>Settings</NavLink></li>
      </ul>
      <FriendsArea data={ props.friends } />
    </aside>
  );
}

export default Sidebar;
