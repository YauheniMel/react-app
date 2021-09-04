import Body from './body/Body';
import Carousel from './carousel/Carousel';
import Head from './head/Head';
import './Section.css';

function Section() {
  return (
    <div className="section__wrap">
      <section className="section">
        <div className="section__head-img">
          <img alt="background" src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" />
        </div>
        <Head />
        <Body />
      </section>
      <Carousel />
    </div>
  );
}

export default Section;
