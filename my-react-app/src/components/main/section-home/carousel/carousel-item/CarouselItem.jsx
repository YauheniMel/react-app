import style from '../Carousel.module.scss';

function CarouselItem(props) {
  return (
    <div className={ style.image_wrap }>
      <img className={ style.image } alt="my images" src={ props.data.url } />
    </div>
  );
}

export default CarouselItem;
