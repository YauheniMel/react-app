import Friend from './friend/Friend';
import style from './SectionMyFriends.module.css';

function SectionMyFriends(props) {
  const friends = props.persons.map((friend) => {
    return <Friend key={ friend.id } data={ friend }/>
  });

  return (
    <div className={ style.section_wrap }>
      <section className={ style.section }>
        { friends }
      </section>
    </div>
  );
}

export default SectionMyFriends;
