import Pagination from '../../../common/Pagination/Pagination';
import Spinner from '../../../common/Spinner/Spinner';
import FriendCard from '../../../common/FriendCard/FriendCard';
import { TargetFriendContainer } from './TargetFriend/TargetFriendContainer';
import { NavLink } from 'react-router-dom';

export default function SectionFriends({
  friends,
  isFetching,
  currentPage,
  setCurrentPage,
  match
}) {
  const friendList = friends.map((friend) => {
    return (
      <NavLink key={friend.id} to={`/friends/${friend.id}`}>
        <FriendCard
          firstName={friend.firstName}
          lastName={friend.lastName}
          photoURL={friend.avatar}
        />
      </NavLink>
    );
  });

  return (
    <>
      {isFetching && <Spinner />}
      <section className="section">
        <TargetFriendContainer match={match} />
        <div className="wrap">{friendList}</div>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </section>
    </>
  );
}
