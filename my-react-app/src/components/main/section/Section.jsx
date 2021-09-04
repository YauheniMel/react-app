import style from './Section.module.css';

import Head from './head/Head';
import Desk from './Desk/Desk';
import Carousel from './carousel/Carousel';

function Section() {
  return (
    <div className={ style.section_wrap }>
      <section className={ style.section }>
        <div className={ style.panorama }>
          <img alt="background" src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" />
        </div>
        <Head />
        <Desk />
      </section>
      <Carousel />
    </div>
  );
}

export default Section;
