import "./AddForm.style.scss";
import FormProps from "./AddForm.props";
import Button from "../Button/Button";
import { useGlobalContext } from "../../context/app.context";
import { useState } from "react";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";

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
        <Input
          className="note-input"
          inputLabel="Name:"
          inputValue={name}
          onChange={(e) => changeName(e.target.value)}
        />
      </label>
      <label className="note-form__description">
        <Textarea
          className="note-textarea"
          textareaLabel="Description:"
          textareaValue={description}
          onChange={(e) => changeDescr(e.target.value)}
        />
      </label>
      <div className="note-form__buttons">
        <Button
          type="submit"
          appearance="primary"
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
