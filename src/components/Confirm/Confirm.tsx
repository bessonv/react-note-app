import "./Confirm.style.scss";
import ConfirmProps from "./Confirm.props";
import Button from "../Button/Button";
import { useGlobalContext } from "../../context/app.context";

const Confirm = ({ data }: ConfirmProps): JSX.Element => {

  const state = useGlobalContext();

  const handleConfirm = (type: boolean) => {
    if (type && data) {
      state.deleteNote(data.key);
    }
    state.closeModal();
  }
  return (
    <div className="note-confirm">
      <div className="note-confirm__description">
        Are you sure you want to delete item <b>{data?.name}</b>?
      </div>
      <div className="note-confirm__buttons">
        <Button shape="default" onClick={() => handleConfirm(true)}>Yes</Button>
        <Button shape="default" onClick={() => handleConfirm(false)}>No</Button>
      </div>
    </div>
  );
}

export default Confirm;
