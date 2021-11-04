import style from './GamesArea.module.scss';
import Spinner from '../../../../common/Spinner/Spinner';

export default function GamesArea({ friends, isLoading }) {

  return (
    <div className={style.games_area}>
      {isLoading && <Spinner />}
    </div>
  );
}
