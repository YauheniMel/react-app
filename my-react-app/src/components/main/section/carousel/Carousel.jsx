import './Carousel.css';

function Carousel() {
  return (
    <div className="carousel__wrap">
      <button className="carousel__btn carousel__btn-left">◄</button>
      <div className="carousel">
        <div className="carousel__page-wrap">
          <img className="carousel__page" alt="my_pages" src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" />
        </div>
        <div className="carousel__page-wrap">
          <img className="carousel__page" alt="my_pages" src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" />
        </div>
        <div className="carousel__page-wrap">
          <img className="carousel__page" alt="my_pages" src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" />
        </div>
        <div className="carousel__page-wrap">
          <img className="carousel__page" alt="my_pages" src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" />
        </div>
        <div className="carousel__page-wrap">
          <img className="carousel__page" alt="my_pages" src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" />
        </div>
        <div className="carousel__page-wrap">
          <img className="carousel__page" alt="my_pages" src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" />
        </div>
      </div>
      <button className="carousel__btn carousel__btn-right">►</button>
    </div>
  );
}

export default Carousel;
