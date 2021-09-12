import Friend from './friend/Friend';
import style from './FriendsArea.module.css';

function FriendsArea(props) {
  const listFriends = props.friends.map((dataItem) => {
    return <Friend key={ dataItem.id } data={ dataItem } />;
  });

  return (
    <div className={ style.friends_area }>
      { listFriends }
    </div>
  );
}

export default FriendsArea;
