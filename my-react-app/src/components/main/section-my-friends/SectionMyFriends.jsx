import Friend from './friend/Friend';
import style from './SectionMyFriends.module.css';

export default function SectionMyFriends({ state }) {
  const friends = state.friends.map((friend) => {
    return <Friend key={ friend.id } data={ friend }/>
  });

  return (
    <div className="section_wrap">
      <section className={ style.section }>
        { friends }
      </section>
    </div>
  );
}
