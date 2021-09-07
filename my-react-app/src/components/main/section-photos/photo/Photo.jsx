import style from '../SectionPhotos.module.css';

function Photo(props) {
  return (
    <div className={ style.photo_wrap }>
      <img src={ props.data.url } alt="album" className={ style.photo }/>
    </div>
  );
}

export default Photo;
