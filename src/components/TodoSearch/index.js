import { useContext } from 'react';
import './TodoSearch.css';
import { TodoContext } from '../../TodoContext';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue
  } = useContext(TodoContext);

  return (
    <input
      placeholder="Cortar cebolla"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  )
}

export { TodoSearch };