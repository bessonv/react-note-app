import { useEffect, useState } from "react";
import "./TodoList.scss";
import TodoItem from "../TodoItem/TodoItem";
import { useGlobalContext } from "../../context";

type ListProps = {
  data?: Data[]
}

const TodoList = ({ data }: ListProps) => {
  const [list, setList] = useState<Data[] | null>([]);
  const state = useGlobalContext() as AppContextInterface;

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  return (
    <ul className="todo-list">
      {
        list?.map((element) => {
          // TODO: change when API is ready
          if (element.name.includes(state.searchQuery) || element.description.includes(state.searchQuery)) {
            return <TodoItem key={element.key} data={element} />;
          }
        })
      }
    </ul>
  )
}

export default TodoList;