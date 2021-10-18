import style from '../FriendsArea.module.scss';

export default function Friend({ data }) {
  return (
    <div className={ style.friend }>
      <div className={ style.photo_wrap }>
        <img className={ style.photo } src={ data.photo } alt="friend" />
      </div>
      <p>{`${ data.firstName } ${ data.lastName }`}</p>
    </div>
  );
}
