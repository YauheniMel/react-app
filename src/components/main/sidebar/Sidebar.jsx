import style from './Sidebar.module.scss';
import { LinguaContext } from '../../../contexts/LinguaContext';
import { ThemeContext } from '../../../contexts/ThemeContext';
import Link from '../../../common/Link/Link';

function Sidebar() {
  return (
    <LinguaContext.Consumer>
      {({ language }) => (
        <ThemeContext.Consumer>
          {({ theme }) => (
            <aside className={`${style.aside} ${style[theme]}`}>
              <ul className={style.list}>
                <li className={style.link}>
                  <Link path="/reactproject/home">{language.sidebar.home}</Link>
                </li>
                <li className={style.link}>
                  <Link path="/reactproject/dialogs">
                    {language.sidebar.dialogs}
                  </Link>
                </li>
                <li className={style.link}>
                  <Link path="/reactproject/friends">
                    {language.sidebar.myFriends}
                  </Link>
                </li>
                <li className={style.link}>
                  <Link path="/reactproject/users">
                    {language.sidebar.users}
                  </Link>
                </li>
                <li className={style.link}>
                  <Link path="/reactproject/photos">
                    {language.sidebar.photos}
                  </Link>
                </li>
              </ul>
            </aside>
          )}
        </ThemeContext.Consumer>
      )}
    </LinguaContext.Consumer>
  );
}

export default Sidebar;
