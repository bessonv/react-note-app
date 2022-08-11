
const TodoItem = ({ data, removeItem }: ItemProps) => {
  const {
    key,
    name,
    description,
    createdDate
   } = data;
  return (
    <li>
      {`${name} ${description} ${createdDate}`} 
      <button onClick={() => removeItem(key)}>X</button>
    </li>
  )
}

export default TodoItem;