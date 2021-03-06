import Pagination from '../../../common/Pagination/Pagination';
import Spinner from '../../../common/Spinner/Spinner';
import FriendCard from '../../../common/FriendCard/FriendCard';
import { TargetFriendContainer } from './TargetFriend/TargetFriendContainer';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';

export default function SectionFriends({
  friends,
  isFetching,
  currentPage,
  totalPages,
  changePage,
  match
}) {
  const friendList = friends.map((friend) => {
    return (
      <NavLink key={friend.id} to={`/react-project/friends/${friend.id}`}>
        <FriendCard
          firstName={friend.firstName}
          lastName={friend.lastName}
          photoURL={friend.photo}
        />
      </NavLink>
    );
  });

  return (
    <>
      {isFetching && <Spinner />}
      <section className="section">
        <Route
          path="/react-project/friends/:friendId"
          render={() => <TargetFriendContainer match={match} />}
        />
        <div className="wrap">{friendList}</div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          changePage={changePage}
        />
      </section>
    </>
  );
}
