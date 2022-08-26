import "./TodoItem.scss";
import { MouseEvent } from 'react';
import { useGlobalContext } from "../../context";

const TodoItem = ({ data }: ItemProps) => {
  const state = useGlobalContext() as AppContextInterface;
  const {
    key,
    name,
    description,
    createdDate
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
        <span className="todo-item__date">{`${createdDate.getDate()}.${createdDate.getMonth()}.${createdDate.getFullYear()}`}</span>
      </div>
      {/* {`${key} ${name} ${description} ${createdDate}`}  */}
      {/* <button onClick={handleShow}>S</button>
      <button onClick={handleDelete}>X</button> */}
    </li>
  )
}

export default TodoItem;