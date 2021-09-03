import Carousel from './carousel/Carousel';
import './Section.css';

function Section() {
  return (
    <div className="section__wrap">
      <section className="section">
        <div className="section__head-img">
          <img alt="background" src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" />
        </div>
        <div className="section__title">
          <h3>Hello world!</h3>
        </div>
        <div className="section__body">
          Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!
          Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!
        </div>
      </section>
      <Carousel />
    </div>
  );
}

export default Section;
