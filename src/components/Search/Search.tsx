import { useCallback, useState, FormEvent } from "react";
import SearchProps from "./Search.props";
import { useGlobalContext } from "../../context/app.context";

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const { search } = useGlobalContext();
  const [query, changeQuery] = useState('');
  const handleQuery = useCallback((e: FormEvent<HTMLInputElement>) => {
    changeQuery(e.currentTarget.value);
    search(e.currentTarget.value);
  }, [changeQuery, search]);
  return (
    <input 
      className={`${className ?? ''} search todo-input`}
      type="text" 
      placeholder="search" 
      onChange={handleQuery}
      value={query}
      {...props} />
  )
}

export default Search;
