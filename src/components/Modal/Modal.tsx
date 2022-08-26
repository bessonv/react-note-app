import './Modal.scss';
import { MouseEvent } from 'react';
import { useGlobalContext } from "../../context";

const Modal = ({ children }: ModalProps) => {
  const state = useGlobalContext() as AppContextInterface;
  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      state.changeModalState(false);
    }
  }
  return (
    <div className="modal" onClick={handleClose}>
      <div className="modal__content">
        <div className="modal__close">
          <div className="modal__close_button button-cross" onClick={handleClose}>X</div>
        </div>
        {/* <button onClick={handleClose}>Close modal</button> */}
        {children}
      </div>
    </div>
  )
}

export default Modal;