import style from './GamesArea.module.scss';
import Spinner from '../../../../common/Spinner/Spinner';

export default function GamesArea({ isLoading }) {
  return <div className={style.games_area}>{isLoading && <Spinner />}</div>;
}
