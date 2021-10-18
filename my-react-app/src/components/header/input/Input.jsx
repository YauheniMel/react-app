import style from '../Header.module.scss'

function SearchInput() {
  return (
    <div>
      <input
        className={ style.input }
        type="text"
      />
    </div>
  );
}

export default SearchInput;
