import style from './SectionHome.module.css';

import Head from './head/Head';
import Desk from './desk/Desk';
import Carousel from './carousel/Carousel';

function SectionHome(props) {
  return (
    <div className="section_wrap">
      <section className={ style.section }>
        <div className={ style.panorama }>
          <img alt="background" src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" />
        </div>
        <Head name="Yaheni Melnik" date="29.06.1991" />
        <Desk />
      </section>
      <Carousel photos={ props.photos }/>
    </div>
  );
}

export default SectionHome;
