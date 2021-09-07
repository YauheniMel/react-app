import Sidebar from './sidebar/Sidebar';
import SectionHome from './section-home/SectionHome';
import SectionMessages from './section-messages/SectionMessages';
import SectionPhotos from './section-photos/SectionPhotos';
import SectionMyFriends from './section-my-friends/SectionMyFriends';
import SectionSettings from './section-settings/SectionSettings';
import { BrowserRouter, Route } from 'react-router-dom';

function Main() {
  return (
    <BrowserRouter>
      <main>
        <div className="container">
          <Sidebar />
          <Route path="/home" component={ SectionHome }/>
          <Route path="/messages" component={ SectionMessages }/>
          <Route path="/photos" component={ SectionPhotos }/>
          <Route path="/my_friends" component={ SectionMyFriends }/>
          <Route path="/settings" component={ SectionSettings }/>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default Main;
