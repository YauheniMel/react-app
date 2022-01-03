import style from './SectionHome.module.scss';
import Head from './head/Head';
import Carousel from '../../../common/carousel/Carousel';
import { DeskContainer } from './desk/DeskContainer';

export default function SectionHome({ state, firstName, lastName, sex, dateOfBirth, avatar }) {
  return (
    <div className="section_wrap">
      <section className={style.section}>
        <div className={style.panorama}>
          <img alt="background" src="/shared/back.jpg" />
        </div>
        <Head
          firstName={firstName}
          lastName={lastName}
          dateOfBirth={dateOfBirth}
          sex={sex}
        />
        <DeskContainer avatar={avatar}/>
        <Carousel photos={state.photos} />
      </section>
    </div>
  );
}
