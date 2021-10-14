import Sidebar from './sidebar/Sidebar';
import SectionHome from './section-home/SectionHome';
import SectionDialogs from './section-dialogs/SectionDialogs';
import SectionPhotos from './section-photos/SectionPhotos';
import SectionMyFriends from './section-my-friends/SectionMyFriends';
import SectionSettings from './section-settings/SectionSettings';
import { Route } from 'react-router-dom';

function Main(props) {
  return (
    <main>
      <div className="container">
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
  );
}

export default Main;
