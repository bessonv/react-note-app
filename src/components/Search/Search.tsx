import { useState } from "react";
import { useGlobalContext } from "../../context";

const Search = () => {
  const state = useGlobalContext() as AppContextInterface;
  const [query, changeQuery] = useState('');
  const handleQuery = (e: React.FormEvent<HTMLInputElement>) => {
    changeQuery(e.currentTarget.value);
    state.search(e.currentTarget.value);
  }
  return (
    <input 
      type="text" 
      className="control__search todo-input" 
      placeholder="search" 
      onChange={handleQuery}
      value={query} />
  )
}

export default Search;