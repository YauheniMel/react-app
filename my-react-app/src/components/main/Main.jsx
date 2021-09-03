import Section from './section/Section';
import Sidebar from './sidebar/Sidebar';

function Main() {
  return (
    <main className="main">
      <div className="container main__container">
        <Sidebar />
        <Section />
      </div>
    </main>
  );
}

export default Main;
