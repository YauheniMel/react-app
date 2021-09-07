import Photo from './photo/Photo';
import style from './SectionPhotos.module.css';

function SectionPhotos() {

  const resData = [
    { id: 1, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 2, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 3, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 4, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 5, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 6, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 7, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 8, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 9, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 10, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 11, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
    { id: 12, url: 'https://images.wallpaperscraft.ru/image/akvarel_pyatna_yarkij_rozovyj_117076_2560x1440.jpg' },
  ];

  const photos = resData.map((dataItem) => {
    return <Photo key={ dataItem.id } data={ dataItem } />
  });

  return (
    <div className={ style.section_wrap }>
      <section className={ style.section }>
        { photos }
      </section>
    </div>
  );
}

export default SectionPhotos
