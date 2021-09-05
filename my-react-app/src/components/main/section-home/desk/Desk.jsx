import style from './Desk.module.css';

function Desk() {
  return (
    <div className={ style.desk }>
      <div className={ style.image_wrap }>
        <img className={ style.image } src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" alt="foto" />
      </div>
      <div className={ style.info }>
        <p>My credo: <span>always work on yourself</span></p>
        <p>My hobby: <span>guitar, football</span></p>
      </div>
    </div>
  );
}

export default Desk;
