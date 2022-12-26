import "./Confirm.style.scss";
import ConfirmProps from "./Confirm.props";
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
        <input type="button" value="Yes" onClick={() => handleConfirm(true)} className="button-medium"/>
        <input type="button" value="No" onClick={() => handleConfirm(false)} className="button-medium"/>
      </div>
    </div>
  );
}

export default Confirm;
