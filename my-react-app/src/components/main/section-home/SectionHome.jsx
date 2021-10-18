import style from './SectionHome.module.scss';

import Head from './head/Head';
import Desk from './desk/Desk';
import Carousel from './carousel/Carousel';

export default function SectionHome({ state, dispatch }) {
  return (
    <div className="section_wrap">
      <section className={ style.section }>
        <div className={ style.panorama }>
          <img alt="background" src='shared/photo.jpg' />
        </div>
        <Head
          firstName={ state.firstName }
          lastName={ state.lastName }
          date={ state.date }
        />
        <Desk
          post={ state.postContent }
          credo={ state.credoContent }
          dispatch={ dispatch }
        />
        <Carousel photos={ props.state.photos }/>
      </section>
    </div>
  );
}
