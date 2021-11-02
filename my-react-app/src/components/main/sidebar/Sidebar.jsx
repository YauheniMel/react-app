import style from './Sidebar.module.scss';

import FriendsArea from './friends-area/FriendsArea';
import { LinguaContext } from '../../../contexts/LinguaContext';
import { ThemeContext } from '../../../contexts/ThemeContext';
import Link from '../../../common/Link/Link';

function Sidebar({ state, isLoading }) {
  return (
    <LinguaContext.Consumer>
      {({ language }) => (
        <ThemeContext.Consumer>
          {({ theme }) => (
            <aside className={`${style.aside} ${style[theme]}`}>
              <ul className={style.list}>
                <li className={style.item}>
                  <Link path="/home">{language.sidebar.home}</Link>
                </li>
                <li className={style.item}>
                  <Link path="/dialogs">{language.sidebar.dialogs}</Link>
                </li>
                <li className={style.item}>
                  <Link path="/my_friends">{language.sidebar.myFriends}</Link>
                </li>
                <li className={style.item}>
                  <Link path="/users">{language.sidebar.users}</Link>
                </li>
                <li className={style.item}>
                  <Link path="/photos">{language.sidebar.photos}</Link>
                </li>
                <li className={style.item}>
                  <Link path="/settings">{language.sidebar.settings}</Link>
                </li>
              </ul>
              <FriendsArea friends={state.friends} isLoading={isLoading} />
            </aside>
          )}
        </ThemeContext.Consumer>
      )}
    </LinguaContext.Consumer>
  );
}

export default Sidebar;
