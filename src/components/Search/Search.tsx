import { useCallback, useState, FormEvent } from "react";
import SearchProps from "./Search.props";
import { useGlobalContext } from "../../context/app.context";
import Input from "../Input/Input";

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const state = useGlobalContext();
  const [query, changeQuery] = useState<string>('');
  const handleQuery = useCallback((e: FormEvent<HTMLInputElement>) => {
    changeQuery(e.currentTarget.value);
    state.search(e.currentTarget.value);
  }, [changeQuery, state]);
  return (
    <Input
      className={`${className ?? ''} search`}
      inputLabel="search"
      inputValue={query}
      onChange={handleQuery}
      {...props}
    />
  )
}

export default Search;
