import style from '../SectionMyFriends.module.css';

export default function Friend({ data }) {
  return (
    <div className={ style.friend }>
      <div className={ style.photo_wrap }>
        <img src={ data.photo } alt="friend" className={ style.photo } />
      </div>
      <p className={ style.name }>{ data.firstName } { data.lastName }</p>
    </div>
  );
}
