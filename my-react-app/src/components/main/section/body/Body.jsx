import './Body.css';

function Body() {
  return (
    <div className="section__body body">
      <div className="body__image-wrap">
        <img className="body__image" src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" alt="foto" />
      </div>
      <div className="body__info">
        <p className="body__credo">My credo: <span className="body__credo-content">always work on yourself</span></p>
        <p className="body__hobby">My hobby: <span className="body__hobby-content">guitar, football</span></p>
      </div>
    </div>
  );
}

export default Body;
