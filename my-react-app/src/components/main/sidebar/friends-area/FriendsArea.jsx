import Friend from './friend/Friend';
import style from './FriendsArea.module.scss';

export default function FriendsArea({ friends }) {
  const listFriends = friends.map((dataItem) => {
    return <Friend key={dataItem.id} data={dataItem} />;
  });

  return <div className={style.friends_area}>{listFriends}</div>;
}
