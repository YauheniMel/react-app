import Sidebar from './sidebar/Sidebar';
import SectionHome from './section-home/SectionHome';
import SectionMessages from './section-messages/SectionMessages';
import SectionPhotos from './section-photos/SectionPhotos';
import SectionMyFriends from './section-my-friends/SectionMyFriends';
import SectionSettings from './section-settings/SectionSettings';
import { BrowserRouter, Route } from 'react-router-dom';

function Main(props) {
  return (
    <BrowserRouter>
      <main>
        <div className="container">
          <Sidebar />
          <Route path="/home" component={ SectionHome }/>
          <Route path="/messages" render={ () => <SectionMessages messages={ props.data[0] } persons={ props.data[1] }/> }/>
          <Route path="/photos" render={ () => <SectionPhotos photos={ props.data[2] }/> }/>
          <Route path="/my_friends" render={ () => <SectionMyFriends persons={ props.data[1] }/> }/>
          <Route path="/settings" component={ SectionSettings }/>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default Main;
