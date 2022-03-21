import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthPageContainer } from './components/pages/AuthPage/AuthPageContainer.jsx';
import Header from './components/header/Header.jsx';
import Main from './components/main/Main.jsx';
import { SignUpPageContainer } from './components/pages/SignUpPage/SignUpPageContainer.jsx';
import { LinguaContext, languages } from './contexts/LinguaContext.jsx';
import { ThemeContext, themes } from './contexts/ThemeContext.jsx';
import useUser from './hooks/useUser.js';

function App() {
  const [language, setLanguage] = useState(languages.on);
  const [theme, setTheme] = useState(themes.on);
  const { user, setUser } = useUser();
  // there is a problem with auth
  return (
    <LinguaContext.Provider
      value={{ language: language, setLanguage: setLanguage }}
    >
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        {user ? <Redirect to="/reactproject" /> : <Redirect to="/login" />}
        <Route
          path="/login"
          render={() => <AuthPageContainer setUser={setUser} />}
        />
        <Route path="/signup" render={() => <SignUpPageContainer />} />
        <Route
          path="/reactproject"
          render={() => (
            <div className="App">
              <Header />
              <Main />
            </div>
          )}
        />
      </ThemeContext.Provider>
    </LinguaContext.Provider>
  );
}

export default App;
