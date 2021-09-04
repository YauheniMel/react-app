import Sidebar from './sidebar/Sidebar';
import Section from './section/Section';

function Main() {
  return (
    <main>
      <div className="container">
        <Sidebar />
        <Section />
      </div>
    </main>
  );
}

export default Main;
