const Display = ({ data }: DisplayProps) => {
  return (
    <div>
      <h2>{data?.name}</h2>
      <div>{data?.description}</div>
      <div>{data?.createdDate.getDate()}</div>
    </div>
  )
}

export default Display;
