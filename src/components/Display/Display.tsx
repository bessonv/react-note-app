const Display = ({ data }: DisplayProps) => {
  return (
    data ? 
      <div>
        <h2>{data.name}</h2>
        <div>{data.description}</div>
        <div>{`${data.createdDate.getDate()}/${data.createdDate.getMonth()}/${data.createdDate.getFullYear()}`}</div>
      </div>
    : <span>Empty object</span>
    
    
  )
}

export default Display;
