import { useGlobalContext } from "../../context";

const Modal = ({ children }: ModalProps) => {
  const state = useGlobalContext();
  const handleClose = () => {
    state?.changeModalState(false);
  }
  return (
    <div className="modal-container">
      <p>This is modal</p>
      <button onClick={handleClose}>Close modal</button>
      {children}
    </div>
  )
}

export default Modal;