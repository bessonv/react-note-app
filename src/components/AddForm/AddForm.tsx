import { useGlobalContext } from "../../context";

const AddForm = () => {
  const state = useGlobalContext()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      todoName: { value: string };
      todoDescription: { value: string };
    };
    const name = target.todoName.value;
    const description = target.todoDescription.value;

    state?.addTodo(name, description);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="todoName"/>
      </label>
      <label>
        Description:
        <input type="text" name="todoDescription"/>
      </label>
      <div>
        <input type="submit" value="save" />
      </div>
    </form>
  )
}

export default AddForm;