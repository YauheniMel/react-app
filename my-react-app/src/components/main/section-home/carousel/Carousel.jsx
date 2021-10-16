import CarouselItem from './carousel-item/CarouselItem';
import style from './Carousel.module.scss';

function Carousel(props) {

  const photos = props.photos.map((photo) => {
    return <CarouselItem key={ photo.id } data={ photo }/>
  });

  return (
    <div className={ style.carousel }>
      <button className={`${style.button} ${style.button_left}`}>◄</button>
      <div className={ style.photos }>
        { photos }
      </div>
      <button className={`${style.button} ${style.button_right}`}>►</button>
    </div>
  );
}

export default Carousel;
