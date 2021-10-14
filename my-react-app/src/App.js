import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Main from './components/main/Main.jsx';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main state={ props.state }
              dispatch={ props.dispatch }
              />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
