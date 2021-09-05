import style from '../SectionPhotos.module.css';

function Photo() {
  return (
    <div className={ style.photo_wrap }>
      <img src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" alt="album" className={ style.photo }/>
    </div>
  );
}

export default Photo;
