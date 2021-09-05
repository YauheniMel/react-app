import Friend from './friend/Friend';
import style from './SectionMyFriends.module.css';

function SectionMyFriends() {
  return (
    <div className={ style.section_wrap }>
      <section className={ style.section }>
        <Friend firstName="Ivan" lastName="Mironov"/>
        <Friend firstName="Ivan" lastName="Mironov"/>
        <Friend firstName="Ivan" lastName="Mironov"/>
        <Friend firstName="Ivan" lastName="Mironov"/>
        <Friend firstName="Ivan" lastName="Mironov"/>
        <Friend firstName="Ivan" lastName="Mironov"/>
        <Friend firstName="Ivan" lastName="Mironov"/>
        <Friend firstName="Ivan" lastName="Mironov"/>
        <Friend firstName="Ivan" lastName="Mironov"/>
        <Friend firstName="Ivan" lastName="Mironov"/>
        <Friend firstName="Ivan" lastName="Mironov"/>
        <Friend firstName="Ivan" lastName="Mironov"/>
        <Friend firstName="Ivan" lastName="Mironov"/>
        <Friend firstName="Ivan" lastName="Mironov"/>
        <Friend firstName="Ivan" lastName="Mironov"/>
        <Friend firstName="Ivan" lastName="Mironov"/>
      </section>
    </div>
  );
}

export default SectionMyFriends;
