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
        <Head firstName={ props.state.firstName } lastName={ props.state.lastName } date={ props.state.date } />
        <Desk post={ props.state.postContent } credo={ props.state.credoContent } dispatch={ props.dispatch }/>
      </section>
      <Carousel photos={ props.state.photos }/>
    </div>
  );
}

export default SectionHome;
