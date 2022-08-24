import "./AddForm.scss";
import { useGlobalContext } from "../../context";

const AddForm = () => {
  const state = useGlobalContext() as AppContextInterface;

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      todoName: { value: string };
      todoDescription: { value: string };
    };
    const name = target.todoName.value;
    const description = target.todoDescription.value;

    state.addTodo(name, description);
  }

  const handleCancel = () => {
    state.changeModalState(false);
  }

  return (
    <form onSubmit={handleSubmit} className="add-form" >
      <label>
        <span>Name:</span>
        <input type="text" name="todoName"/>
      </label>
      <label>
        <span>Description:</span>
        <textarea rows={6} name="todoDescription"/>
      </label>
      <div className="add-form__buttons">
        <input type="submit" value="save" className="add-form__button button-medium"/>
        <input type="button" value="cancel" onClick={handleCancel} className="add-form__button button-medium"/>
      </div>
    </form>
  )
}

export default AddForm;