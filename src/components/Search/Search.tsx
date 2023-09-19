import { useState, FormEvent, useEffect } from "react";
import SearchProps from "./Search.props";
import { useGlobalContext } from "../../context/app.context";

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const { search } = useGlobalContext();
  const [query, changeQuery] = useState('');
  const handleQuery = (e: FormEvent<HTMLInputElement>) => {
    changeQuery(e.currentTarget.value);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      search(query);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [query]);

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
