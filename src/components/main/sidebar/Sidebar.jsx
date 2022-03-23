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
                  <Link path="/react-project/home">
                    {language.sidebar.home}
                  </Link>
                </li>
                <li className={style.link}>
                  <Link path="/react-project/dialogs">
                    {language.sidebar.dialogs}
                  </Link>
                </li>
                <li className={style.link}>
                  <Link path="/react-project/friends">
                    {language.sidebar.myFriends}
                  </Link>
                </li>
                <li className={style.link}>
                  <Link path="/react-project/users">
                    {language.sidebar.users}
                  </Link>
                </li>
                <li className={style.link}>
                  <Link path="/react-project/photos">
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
