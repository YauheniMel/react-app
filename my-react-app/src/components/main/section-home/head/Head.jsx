import style from '../SectionHome.module.css';

function Head(props) {
  return (
    <div className={ style.user }>
      <p>{ props.name }</p>
      <p>{ props.date }</p>
    </div>
  );
}

export default Head;
