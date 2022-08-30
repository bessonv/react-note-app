import { useGlobalContext } from "../../context";
import "./Display.scss";

type DisplayProps = {
  data?: Data
}

const Display = ({ data }: DisplayProps) => {

  const state = useGlobalContext() as AppContextInterface;

  const handleEdit = () => {
    if (data)
      state.showEditTodo(data.key);
  }

  return (
    data ? 
      <div className="todo-display">
        <h2 className="todo-display__name">{data.name}</h2>
        <div className="todo-display__description">{data.description}</div>
        <div className="todo-display__date">
          {`created ${data.createdDate.getDate()}.${data.createdDate.getMonth()}.${data.createdDate.getFullYear()}`}
        </div>
        <input type="button" value="edit" onClick={handleEdit} className="button-medium"/>
      </div>
    : <span>Empty object</span>
    
    
  )
}

export default Display;
