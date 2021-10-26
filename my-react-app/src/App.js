import { useState } from 'react';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Main from './components/main/Main.jsx';
import { LinguaContext, languages } from './contexts/LinguaContext.jsx';
import { ThemeContext, themes } from './contexts/ThemeContext.jsx';

function App() {
  const [language, setLanguage] = useState(languages.on);
  const [theme, setTheme] = useState(themes.on);

  return (
    <LinguaContext.Provider
      value={{ language: language, setLanguage: setLanguage }}
    >
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </LinguaContext.Provider>
  );
}

export default App;
