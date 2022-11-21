import "./TodoList.style.scss";
import ListProps from "./TodoList.props";
import { useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ data, className, ...props }: ListProps): JSX.Element => {
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
    <ul
      className={`${className ?? ''} todo-list`}
      {...props}
    >
      {
        list ? list.map((element) => {
          return <TodoItem key={element.key} data={element} />;
        }) : <div>The list is empty</div>
      }
    </ul>
  )
}

export default TodoList;
