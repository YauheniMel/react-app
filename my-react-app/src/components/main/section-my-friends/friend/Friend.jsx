import style from '../SectionMyFriends.module.css';

function Friend(props) {
  return (
    <div className={ style.friend }>
      <div className={ style.photo_wrap }>
        <img src="https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg" alt="friend" className={ style.photo } />
      </div>
      <p className={ style.name }>{ props.firstName } { props.lastName }</p>
    </div>
  );
}

export default Friend;
