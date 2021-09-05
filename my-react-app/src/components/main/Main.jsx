import Sidebar from './sidebar/Sidebar';
import SectionHome from './section-home/SectionHome';
import SectionMessages from './section-messages/SectionMessages';
import SectionPhotos from './section-photos/SectionPhotos';
import SectionMyFriends from './section-my-friends/SectionMyFriends';
import SectionSetting from './section-setting/SectionSetting';

function Main() {
  return (
    <main>
      <div className="container">
        <Sidebar />
        <SectionHome />
        {/* <SectionMessages /> */}
        {/* <SectionPhotos /> */}
        {/* <SectionMyFriends /> */}
        {/* <SectionSetting /> */}
      </div>
    </main>
  );
}

export default Main;
