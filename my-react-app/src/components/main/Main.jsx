import { Route } from 'react-router-dom';
import style from './Main.module.scss';
import { ThemeContext } from '../../contexts/ThemeContext';
import { SidebarContainer } from './sidebar/SidebarContainer';
import { SectionHomeContainer } from './section-home/SectionHomeContainer';
import { SectionMyFriendsContainer } from './section-my-friends/SectionMyFriendsContainer';
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
              path="/my_friends"
              render={() => <SectionMyFriendsContainer />}
            />
            <Route path="/users" render={() => <SectionUsersContainer />} />
            <Route path="/photos" render={() => <SectionPhotosContainer />} />
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
