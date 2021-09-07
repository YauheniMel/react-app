import './App.css';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Main from './components/main/Main.jsx';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Main data={ props.data }/>
      <Footer />
    </div>
  );
}

export default App;
