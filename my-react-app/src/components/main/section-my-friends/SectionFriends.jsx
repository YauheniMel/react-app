import style from './SectionFriends.module.scss';
import Pagination from '../../../common/Pagination/Pagination';
import Spinner from '../../../common/Spinner/Spinner';
import FriendModule from '../../../common/FriendModule/FriendModule';
import Link from '../../../common/Link/Link';
import { TargetFriendContainer } from './TargetFriend/TargetFriendContainer';

export default function SectionFriends({
  friends,
  isLoading,
  currentPage,
  setCurrentPage,
  match,
}) {
  const friendList = friends.map((friend) => {
    return (
      <Link key={friend.id} path={`/friends/${friend.id}`}>
        <FriendModule
          firstName={friend.firstName}
          lastName={friend.lastName}
          photoURL={friend.avatar}
        />
      </Link>
    );
  });

  return (
    <section className={`section_wrap ${style.section}`}>
      <TargetFriendContainer match={match} />
      {friendList}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {isLoading && <Spinner />}
    </section>
  );
}
