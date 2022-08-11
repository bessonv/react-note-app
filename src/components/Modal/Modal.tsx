
const Modal = ({ closeModal, children }: ModalProps) => {
  return (
    <div className="modal-container">
      <p>This is modal</p>
      <button onClick={() => closeModal()}>Close modal</button>
      {children}
    </div>
  )
}

export default Modal;