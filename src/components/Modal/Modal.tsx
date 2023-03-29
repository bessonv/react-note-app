import './Modal.style.scss';
import ModalProps from './Modal.props';
import Button from '../Button/Button';
import { MouseEvent } from 'react';
import { useGlobalContext } from "../../context/app.context";

const Modal = ({ children }: ModalProps): JSX.Element => {
  const state = useGlobalContext();
  const handleClose = (e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      state.closeModal();
    }
  }
  return (
    state.isModalOpen ?
    <div className="modal" onClick={handleClose}>
      <div className="modal__content">
        <div className="modal__close">
          <Button shape="round" className="modal__close_button" onClick={handleClose}>X</Button>
        </div>
        {children}
      </div>
    </div> : <></>
  )
}

export default Modal;
