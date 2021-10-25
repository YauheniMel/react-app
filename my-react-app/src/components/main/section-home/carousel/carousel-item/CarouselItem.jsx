import style from '../Carousel.module.scss';

export default function CarouselItem({ data }) {
  return (
    <div className={style.image_wrap}>
      <img className={style.image} alt="my images" src={data.url} />
    </div>
  );
}
