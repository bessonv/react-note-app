import "./TodoItem.scss";
import { MouseEvent } from 'react';
import { useGlobalContext } from "../../context";

type ItemProps = {
  data: Data,
  isShown?: boolean
}

const TodoItem = ({ data }: ItemProps) => {
  const state = useGlobalContext() as AppContextInterface;
  const {
    key,
    name,
    description,
    created
   } = data;
  const handleShow = (e: MouseEvent<HTMLDivElement>) => {
    state.showTodo(key);
  }
  const handleDelete = () => {
    state.deleteTodo(key);
  }
  return (
    <li className="todo-item">
      <div className="todo-item__delete"><span className="todo-item__delete_button button-cross" onClick={handleDelete}>X</span></div>
      <div className="todo-item__content" onClick={handleShow}>
        <h2 className="todo-item__name">{name}</h2>
        <p className="todo-item__description">{description.length > 160 ? description.slice(0, 160) + '...' : description}</p>
        <span className="todo-item__date">{`${created.getDate()}.${created.getMonth() + 1}.${created.getFullYear()}`}</span>
      </div>
    </li>
  )
}

export default TodoItem;