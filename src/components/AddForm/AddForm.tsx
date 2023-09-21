import "./AddForm.style.scss";
import FormProps from "./AddForm.props";
import Button from "../Button/Button";
import { useGlobalContext } from "../../context/app.context";
import { useState } from "react";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import { ReactComponent as EditIcon } from '../../assets/pencil-filled.svg';
import { ReactComponent as NewIcon } from '../../assets/pencil-empty.svg';

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
    <>
      {note
        ? <EditIcon className="title-icon" />
        : <NewIcon className="title-icon" />
      }
      <h2 className="title">
        {note
          ? "Edit note"
          : "Create note"
        }
      </h2>
      <form
        onSubmit={handleSubmit} 
        className={`${className ?? ''} note-form`}
        {...props}
      >
        <Input
          label="Name"
          name="noteName"
          value={name}
          disabled={isFetching}
          placeholder="Note name"
          onChange={(e) => changeName(e.target.value)}
        />
        <Textarea
          label="Description"
          name="noteDescription"
          value={description}
          disabled={isFetching}
          placeholder="Note description"
          onChange={(e) => changeDescr(e.target.value)}
        />
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
    </>
  )
}

export default AddForm;
