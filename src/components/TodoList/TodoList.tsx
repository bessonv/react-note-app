import { useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ data, removeItem, showItem }: ListProps) => {
  const [list, setList] = useState<Data[] | null>([]);

  useEffect(() => {
    setList(data);
  }, [data]);

  return (
    <>
      <h2>The List</h2>
      <ul>
        {
          list?.map((element) => {
            return <TodoItem key={element.key} data={element} removeItem={removeItem} showItem={showItem} />;
          })
        }
      </ul>
    </>
  )
}

export default TodoList;