import style from './Carousel.module.css';

function Carousel() {
  return (
    <div className={ style.carousel_wrap }>
      <button className={`${style.button} ${style.button_left}`}>◄</button>
      <div className={ style.carousel }>
        <div className={ style.image_wrap }>
          <img className={ style.image } alt="my images" src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" />
        </div>
        <div className={ style.image_wrap }>
          <img className={ style.image } alt="my images" src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" />
        </div>
        <div className={ style.image_wrap }>
          <img className={ style.image } alt="my images" src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" />
        </div>
        <div className={ style.image_wrap }>
          <img className={ style.image } alt="my images" src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" />
        </div>
        <div className={ style.image_wrap }>
          <img className={ style.image } alt="my images" src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" />
        </div>
      </div>
      <button className={`${style.button} ${style.button_right}`}>►</button>
    </div>
  );
}

export default Carousel;
