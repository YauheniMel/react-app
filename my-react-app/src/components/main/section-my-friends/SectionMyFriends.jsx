import Friend from './friend/Friend';
import style from './SectionMyFriends.module.scss';
import Pagination from '../../../common/Pagination/Pagination';
import Spinner from '../../../common/Spinner/Spinner';

export default function SectionMyFriends({ friends, isLoading, currentPage, setCurrentPage }) {

  const friendList = friends.map((friend) => {
    return (
      <Friend
        key={friend.id}
        firstName={friend.firstName}
        lastName={friend.lastName}
        photoURL={friend.photo}
      />
    );
  });

  return (
    <section className={`section_wrap ${style.section}`}>
      {friendList}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {isLoading && <Spinner />}
    </section>
  );
}
