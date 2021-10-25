import { ThemeContext } from '../../contexts/ThemeContext';
import style from './Footer.module.scss';

export default function Footer() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <footer className={`${style.footer} ${style[theme]}`}>
          <div className={`${style.container} container`}>
            <h3>#########################</h3>
          </div>
        </footer>
      )}
    </ThemeContext.Consumer>
  );
}
