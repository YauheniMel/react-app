import Friend from './friend/Friend';
import style from './FriendsArea.module.scss';
import Spinner from '../../../../common/Spinner/Spinner';

export default function FriendsArea({ friends, isLoading }) {
  const listFriends = friends.map((dataItem) => {
    return <Friend key={dataItem.id} data={dataItem} />;
  });

  return (
    <div className={style.friends_area}>
      {listFriends}
      {isLoading && <Spinner />}
    </div>
  );
}
