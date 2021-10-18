import style from './Sidebar.module.scss';

import { NavLink } from 'react-router-dom';
import FriendsArea from './friends-area/FriendsArea';
import { LinguaContext } from '../../../contexts/LinguaContext';
import { ThemeContext } from '../../../contexts/ThemeContext';

function Sidebar({ state }) {
  return (
    <LinguaContext.Consumer>
      { ({language}) => (
        <ThemeContext.Consumer>
          { ({theme}) => (
            <aside className={ `${style.aside} ${style[theme]}` }>
              <ul className={ style.list }>
                <li className={ style.item }><NavLink className={ style.link } to="/home" activeClassName={ style.active }>{ language.sidebar.home }</NavLink></li>
                <li className={ style.item }><NavLink className={ style.link } to="/dialogs" activeClassName={ style.active }>{ language.sidebar.dialogs }</NavLink></li>
                <li className={ style.item }><NavLink className={ style.link } to="/my_friends" activeClassName={ style.active }>{ language.sidebar.myFriends }</NavLink></li>
                <li className={ style.item }><NavLink className={ style.link } to="/photos" activeClassName={ style.active }>{ language.sidebar.photos }</NavLink></li>
                <li className={ style.item }><NavLink className={ style.link } to="/settings" activeClassName={ style.active }>{ language.sidebar.settings }</NavLink></li>
              </ul>
              <FriendsArea friends={ state.friends } />
            </aside>
          )}
        </ThemeContext.Consumer>
      )}
    </LinguaContext.Consumer>
  );
}

export default Sidebar;
