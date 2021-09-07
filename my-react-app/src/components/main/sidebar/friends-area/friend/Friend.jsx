import style from '../FriendsArea.module.css';

function Friend(props) {
  return (
    <div className={ style.friend }>
      <div className={ style.photo_wrap }>
        <img className={ style.photo } src={ props.data.photo } alt="friend" />
      </div>
      <p>{`${ props.data.firstName } ${ props.data.lastName }`}</p>
    </div>
  );
}

export default Friend;
