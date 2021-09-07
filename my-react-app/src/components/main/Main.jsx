import Sidebar from './sidebar/Sidebar';
import SectionHome from './section-home/SectionHome';
import SectionMessages from './section-messages/SectionMessages';
import SectionPhotos from './section-photos/SectionPhotos';
import SectionMyFriends from './section-my-friends/SectionMyFriends';
import SectionSettings from './section-settings/SectionSettings';
import { Route } from 'react-router-dom';

function Main(props) {
  return (
    <main>
      <div className="container">
        <Sidebar friends={ props.data.friends }/>
        <Route path="/home" component={ SectionHome }/>
        <Route path="/messages" render={ () => <SectionMessages messages={ props.data.messages } persons={ props.data.persons }/> }/>
        <Route path="/photos" render={ () => <SectionPhotos photos={ props.data.photos }/> }/>
        <Route path="/my_friends" render={ () => <SectionMyFriends friends={ props.data.friends }/> }/>
        <Route path="/settings" component={ SectionSettings }/>
      </div>
    </main>
  );
}

export default Main;
