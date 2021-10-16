import style from '../SectionHome.module.scss';

function Head(props) {
  return (
    <div className={ style.user }>
      <p>{`${ props.firstName } ${ props.lastName }`}</p>
      <p>{ props.date }</p>
    </div>
  );
}

export default Head;
