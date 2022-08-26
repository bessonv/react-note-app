import "./Display.scss";

const Display = ({ data }: DisplayProps) => {
  return (
    data ? 
      <div className="todo-display">
        <h2 className="todo-display__name">{data.name}</h2>
        <div className="todo-display__description">{data.description}</div>
        <div className="todo-display__date">
          {`created ${data.createdDate.getDate()}.${data.createdDate.getMonth()}.${data.createdDate.getFullYear()}`}
        </div>
      </div>
    : <span>Empty object</span>
    
    
  )
}

export default Display;
