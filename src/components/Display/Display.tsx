import "./Display.style.scss";
import DisplayProps from "./Display.props";
import { useGlobalContext } from "../../context/app.context";

const Display = ({ data, className, ...props }: DisplayProps): JSX.Element => {

  const state = useGlobalContext() as AppContextInterface;

  const handleEdit = () => {
    if (data)
      state.showEditTodo(data.key);
  }
  return (
    <div className={`${className ?? ''} todo-display`} {...props}>
      {data
        ? <>
            <h2 className="todo-display__name">{data.name}</h2>
            <div className="todo-display__description">{data.description}</div>
            <div className="todo-display__date">
              {`created ${data.created.getDate()}.${data.created.getMonth() + 1}.${data.created.getFullYear()}`}
            </div>
            <input type="button" value="edit" onClick={handleEdit} className="button-medium"/>
          </>
        : <div>Empty object</div>
      }
    </div>
  );
}

export default Display;
