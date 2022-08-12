
const TodoItem = ({ data, removeItem, showItem }: ItemProps) => {
  const {
    key,
    name,
    description,
    createdDate
   } = data;
  return (
    <li>
      {`${name} ${description} ${createdDate}`} 
      <button onClick={() => showItem(key)}>S</button>
      <button onClick={() => removeItem(key)}>X</button>
    </li>
  )
}

export default TodoItem;