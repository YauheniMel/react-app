import CarouselItem from './carousel-item/CarouselItem';
import style from './Carousel.module.css';

function Carousel() {
  const resData = [
    { id: '1', url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg'},
    { id: '2', url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg'},
    { id: '3', url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg'},
    { id: '4', url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg'},
    { id: '5', url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg'},
    { id: '6', url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg'},
    { id: '7', url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg'},
    { id: '8', url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg'},
    { id: '9', url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg'},
  ];

  const photos = resData.map((dataItem) => {
    return <CarouselItem key={ dataItem.id } data={ dataItem }/>
  });

  return (
    <div className={ style.carousel_wrap }>
      <button className={`${style.button} ${style.button_left}`}>◄</button>
      <div className={ style.carousel }>
        { photos }
      </div>
      <button className={`${style.button} ${style.button_right}`}>►</button>
    </div>
  );
}

export default Carousel;
