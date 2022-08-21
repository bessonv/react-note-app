const Display = ({ data }: DisplayProps) => {
  return (
    data ? 
      <div>
        <h2>{data.name}</h2>
        <div>{data.description}</div>
        <div>{data.createdDate.getDate()}</div>
      </div>
    : <span>Empty object</span>
    
    
  )
}

export default Display;
