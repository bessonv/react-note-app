import { useGlobalContext } from "../../context";

const TodoItem = ({ data }: ItemProps) => {
  const state = useGlobalContext();
  const {
    key,
    name,
    description,
    createdDate
   } = data;
  const handleShow = () => {
    state?.showTodo(key);
  }
  const handleDelete = () => {
    state?.deleteTodo(key);
  }
  return (
    <li>
      {`${key} ${name} ${description} ${createdDate}`} 
      <button onClick={handleShow}>S</button>
      <button onClick={handleDelete}>X</button>
    </li>
  )
}

export default TodoItem;