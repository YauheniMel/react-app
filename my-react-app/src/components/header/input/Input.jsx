import style from '../Header.module.css'

function SearchInput() {
  return (
    <div>
      <input className={ style.input }
             type="text" />
    </div>
  );
}

export default SearchInput;
