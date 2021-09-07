import Friend from './friend/Friend';
import style from './SectionMyFriends.module.css';

function SectionMyFriends() {
  const resPerson = [
    { firstName: 'Dima', lastName: 'Muller', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '1'},
    { firstName: 'Serg', lastName: 'Melnik', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '2'},
    { firstName: 'Max', lastName: 'Kotov', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '3'},
    { firstName: 'Bill', lastName: 'Smirnov', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '4'},
    { firstName: 'Tom', lastName: 'Ivanov', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '5'},
    { firstName: 'Bob', lastName: 'Miron', photo: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg', id: '6'},
  ];

  const person = resPerson.map((person) => {
    return <Friend key={ person.id } data={ person }/>
  });

  return (
    <div className={ style.section_wrap }>
      <section className={ style.section }>
        { person }
      </section>
    </div>
  );
}

export default SectionMyFriends;
