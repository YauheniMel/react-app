import Friend from './friend/Friend';
import style from './SectionMyFriends.module.scss';

export default function SectionMyFriends({ friends }) {
  const friendList = friends.map((friend) => {
    return <Friend key={friend.id} data={friend} />;
  });

  return (
    <div className="section_wrap">
      <section className={style.section}>{friendList}</section>
    </div>
  );
}
