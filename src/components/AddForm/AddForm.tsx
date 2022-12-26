import "./AddForm.style.scss";
import FormProps from "./AddForm.props";
import { useGlobalContext } from "../../context/app.context";
import { useState } from "react";

const AddForm = ({ note, className, ...props }: FormProps): JSX.Element => {
  const state = useGlobalContext();
  const [name, changeName] = useState(note?.name || '');
  const [description, changeDescr] = useState(note?.description || '');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (note) {
      state.editNote({ ...note, name, description });
    } else {
      state.addNote(name, description);
    }
  }

  const handleCancel = () => {
    state.closeModal();
  }

  return (
    <form
      onSubmit={handleSubmit} 
      className={`${className ?? ''} note-form`}
      {...props}
    >
      <label className="note-form__name">
        <span>Name:</span>
        <input 
          type="text" 
          name="noteName" 
          className="note-input" 
          value={name} 
          onChange={(e) => changeName(e.target.value)}/>
      </label>
      <label className="note-form__description">
        <span>Description:</span>
        <textarea 
          rows={6} 
          name="noteDescription" 
          className="note-textarea" 
          value={description} 
          onChange={(e) => changeDescr(e.target.value)}/>
      </label>
      <div className="note-form__buttons">
        <input type="submit" value="save" className="note-form__button button-medium"/>
        <input type="button" value="cancel" onClick={handleCancel} className="note-form__button button-medium"/>
      </div>
    </form>
  )
}

export default AddForm;
