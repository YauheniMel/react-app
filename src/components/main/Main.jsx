import { Route, Switch } from 'react-router-dom';
import style from './Main.module.scss';
import { ThemeContext } from '../../contexts/ThemeContext';
import { SidebarContainer } from './sidebar/SidebarContainer';
import { SectionHomeContainer } from './section-home/SectionHomeContainer';
import { SectionFriendsContainer } from './section-my-friends/SectionFriendsContainer';
import { SectionDialogsContainer } from './section-dialogs/SectionDialogsContainer';
import { SectionPhotosContainer } from './section-photos/SectionPhotosContainer';
import { SectionUsersContainer } from './section-users/SectionUsersContainer';

function Main() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <main className={`${style.main} ${style[theme]}`}>
          <div className={`${style.container} container`}>
            <SidebarContainer />
            <Switch>
              <Route
                path="/reactproject/home"
                render={() => <SectionHomeContainer />}
              />
              <Route
                path="/reactproject/dialogs"
                render={() => <SectionDialogsContainer />}
              />
              <Route
                path="/reactproject/friends/:friend?"
                render={() => <SectionFriendsContainer />}
              />
              <Route
                path="/reactproject/users/:userId?"
                render={() => <SectionUsersContainer />}
              />
              <Route
                path="/reactproject/photos/:photoId?"
                render={() => <SectionPhotosContainer />}
              />
            </Switch>
          </div>
        </main>
      )}
    </ThemeContext.Consumer>
  );
}

export default Main;
