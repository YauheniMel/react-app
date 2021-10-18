import Sidebar from './sidebar/Sidebar';
import SectionHome from './section-home/SectionHome';
import SectionDialogs from './section-dialogs/SectionDialogs';
import SectionPhotos from './section-photos/SectionPhotos';
import SectionMyFriends from './section-my-friends/SectionMyFriends';
import SectionSettings from './section-settings/SectionSettings';
import { Route } from 'react-router-dom';
import style from './Main.module.scss';
import { ThemeContext } from '../../contexts/ThemeContext';

function Main(props) {
  return (
    <ThemeContext.Consumer>
      {({theme}) => (
        <main className={`${style.main} ${style[theme]}`}>
          <div className={`${ style.container } container`}>
            <Sidebar state={ props.state.friendPage }/>
            <Route path="/home" render={ () => {
              return <SectionHome state={ props.state.homePage } dispatch={ props.dispatch }/>
            }}/>
            <Route path="/dialogs" render={ () => {
              return <SectionDialogs state={ props.state.dialogsPage }
                                      dispatch={ props.dispatch }
                                      />
            }}/>
            <Route path="/photos" render={ () => <SectionPhotos state={ props.state.photoPage }/> }/>
            <Route path="/my_friends" render={ () => <SectionMyFriends state={ props.state.friendPage }/> }/>
            <Route path="/settings" component={ SectionSettings }/>
          </div>
        </main>
      )}
    </ThemeContext.Consumer>
  );
}

export default Main;
