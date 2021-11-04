import style from './SectionHome.module.scss';

import Head from './head/Head';
import Carousel from '../../../common/carousel/Carousel';
import { DeskContainer } from './desk/DeskContainer';

export default function SectionHome({ state, dispatch }) {
  return (
    <div className="section_wrap">
      <section className={style.section}>
        <div className={style.panorama}>
          <img alt="background" src="shared/photo.jpg" />
        </div>
        <Head
          firstName={state.firstName}
          lastName={state.lastName}
          date={state.date}
        />
        <DeskContainer />
        <Carousel photos={state.photos} />
      </section>
    </div>
  );
}
