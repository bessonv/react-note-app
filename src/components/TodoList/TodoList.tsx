import { useEffect, useState } from "react";
import "./TodoList.scss";
import TodoItem from "../TodoItem/TodoItem";

type ListProps = {
  data?: Data[]
}

const TodoList = ({ data }: ListProps) => {
  const [list, setList] = useState<Data[] | null>([]);

  useEffect(() => {
    if (data) {
      data.sort((a: Data, b: Data) => {
        return b.created.getTime() - a.created.getTime();
      });
      setList(data);
    }
  }, [data]);

  return (
    <ul className="todo-list">
      {
        list?.map((element) => {
          return <TodoItem key={element.key} data={element} />;
        })
      }
    </ul>
  )
}

export default TodoList;