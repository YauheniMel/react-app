import style from './SectionHome.module.scss';

import Head from './head/Head';
import Desk from './desk/Desk';
import Carousel from './carousel/Carousel';

function SectionHome(props) {
  return (
    <div className="section_wrap">
      <section className={ style.section }>
        <div className={ style.panorama }>
          <img alt="background" src='shared/photo.jpg' />
        </div>
        <Head firstName={ props.state.firstName } lastName={ props.state.lastName } date={ props.state.date } />
        <Desk post={ props.state.postContent } credo={ props.state.credoContent } dispatch={ props.dispatch }/>
        <Carousel photos={ props.state.photos }/>
      </section>
    </div>
  );
}

export default SectionHome;
