import { useGlobalContext } from "../../context";

const TodoItem = ({ data }: ItemProps) => {
  const state = useGlobalContext();
  const {
    key,
    name,
    description,
    createdDate
   } = data;
  return (
    <li>
      {`${name} ${description} ${createdDate}`} 
      <button onClick={() => console.log('clicked s')}>S</button>
      <button onClick={() => console.log('clicked x')}>X</button>
    </li>
  )
}

export default TodoItem;