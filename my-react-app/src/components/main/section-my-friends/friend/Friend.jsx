import style from '../SectionMyFriends.module.css';

function Friend(props) {
  return (
    <div className={ style.friend }>
      <div className={ style.photo_wrap }>
        <img src={ props.data.photo } alt="friend" className={ style.photo } />
      </div>
      <p className={ style.name }>{ props.data.firstName } { props.data.lastName }</p>
    </div>
  );
}

export default Friend;
