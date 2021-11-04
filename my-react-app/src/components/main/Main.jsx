import { Route } from 'react-router-dom';
import style from './Main.module.scss';
import { ThemeContext } from '../../contexts/ThemeContext';
import { SidebarContainer } from './sidebar/SidebarContainer';
import { SectionHomeContainer } from './section-home/SectionHomeContainer';
import { SectionFriendsContainer } from './section-my-friends/SectionFriendsContainer';
import { SectionDialogsContainer } from './section-dialogs/SectionDialogsContainer';
import { SectionPhotosContainer } from './section-photos/SectionPhotosContainer';
import { SectionSettingsContainer } from './section-settings/SectionSettingsContainer';
import { SectionUsersContainer } from './section-users/SectionUsersContainer';

function Main() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <main className={`${style.main} ${style[theme]}`}>
          <div className={`${style.container} container`}>
            <SidebarContainer />
            <Route path="/home" render={() => <SectionHomeContainer />} />
            <Route path="/dialogs" render={() => <SectionDialogsContainer />} />
            <Route
              path="/friends/:friendId?"
              render={() => <SectionFriendsContainer />}
            />
            <Route
              path="/users/:userId?"
              render={() => <SectionUsersContainer />}
            />
            <Route
              path="/photos/:photoId?"
              render={() => <SectionPhotosContainer />}
            />
            <Route
              path="/settings"
              render={() => <SectionSettingsContainer />}
            />
          </div>
        </main>
      )}
    </ThemeContext.Consumer>
  );
}

export default Main;
