import "./AddForm.style.scss";
import FormProps from "./AddForm.props";
import Button from "../Button/Button";
import { useGlobalContext } from "../../context/app.context";
import { useState } from "react";

const AddForm = ({ note, className, ...props }: FormProps): JSX.Element => {
  const {
    isFetching,
    editNote,
    addNote,
    closeModal,
  } = useGlobalContext();
  const [name, changeName] = useState(note?.name || '');
  const [description, changeDescr] = useState(note?.description || '');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (note) {
      editNote({ ...note, name, description });
    } else {
      addNote(name, description);
    }
  }

  const handleCancel = () => {
    closeModal();
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
          disabled={isFetching}
          onChange={(e) => changeName(e.target.value)}/>
      </label>
      <label className="note-form__description">
        <span>Description:</span>
        <textarea 
          rows={6} 
          name="noteDescription" 
          className="note-textarea" 
          value={description} 
          disabled={isFetching}
          onChange={(e) => changeDescr(e.target.value)}/>
      </label>
      <div className="note-form__buttons">
        <Button
          type="submit"
          appearance="primary"
          isLoading={isFetching}
          className="note-form__button"
        >
          save
        </Button>
        <Button
          type="button"
          onClick={handleCancel}
          className="note-form__button"
        >
          cancel
        </Button>
      </div>
    </form>
  )
}

export default AddForm;
