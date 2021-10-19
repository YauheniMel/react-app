import Toggle from '../../common/Toggle/Toggle.jsx';
import { LinguaContext, languages } from '../../contexts/LinguaContext.jsx';
import { ThemeContext, themes } from '../../contexts/ThemeContext.jsx';
import style from './Header.module.scss';
import Input from './input/Input.jsx';
import Nav from './nav/Nav.jsx';

export default function Header() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <header className={`${style.header} ${style[theme]}`}>
          <div className={`${style.container} container`}>
            <h2 className={`${style.logo} ${style[theme]}`}>React project</h2>
            <LinguaContext.Consumer>
              {({ language, setLanguage }) => (
                <>
                  <Toggle
                    valueChoice={languages}
                    choice={['eng', 'рус']}
                    title={language.header.language}
                    checked={true}
                    valueChange={setLanguage}
                  />
                  <ThemeContext.Consumer>
                    {({ setTheme }) => (
                      <Toggle
                        valueChoice={themes}
                        valueChange={setTheme}
                        choice={['light', 'dark']}
                        title={language.header.theme}
                        checked={true}
                      />
                    )}
                  </ThemeContext.Consumer>
                </>
              )}
            </LinguaContext.Consumer>
            <Input />
          </div>
          <Nav />
        </header>
      )}
    </ThemeContext.Consumer>
  );
}
