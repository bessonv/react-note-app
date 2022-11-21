import "./AddForm.style.scss";
import FormProps from "./AddForm.props";
import { useGlobalContext } from "../../context/app.context";
import { useState } from "react";

const AddForm = ({ todo, className, ...props }: FormProps): JSX.Element => {
  const state = useGlobalContext() as AppContextInterface;
  const [name, changeName] = useState(todo?.name || '');
  const [description, changeDescr] = useState(todo?.description || '');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      todoName: { value: string };
      todoDescription: { value: string };
    };
    const name = target.todoName.value;
    const description = target.todoDescription.value;

    if (todo) {
      state.editTodo({ ...todo, name, description });
    } else {
      state.addTodo(name, description);
    }
  }

  const handleCancel = () => {
    state.closeModal();
  }

  return (
    <form
      onSubmit={handleSubmit} 
      className={`${className ?? ''} todo-form`}
      {...props}
    >
      <label className="todo-form__name">
        <span>Name:</span>
        <input 
          type="text" 
          name="todoName" 
          className="todo-input" 
          value={name} 
          onChange={(e) => changeName(e.target.value)}/>
      </label>
      <label className="todo-form__description">
        <span>Description:</span>
        <textarea 
          rows={6} 
          name="todoDescription" 
          className="todo-textarea" 
          value={description} 
          onChange={(e) => changeDescr(e.target.value)}/>
      </label>
      <div className="todo-form__buttons">
        <input type="submit" value="save" className="todo-form__button button-medium"/>
        <input type="button" value="cancel" onClick={handleCancel} className="todo-form__button button-medium"/>
      </div>
    </form>
  )
}

export default AddForm;
