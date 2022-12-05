import { ModalActionKind } from '../enums';

interface ActionModalType {
  type: ModalActionKind.CLOSE_MODAL,
  payload: TodoModalType
}

interface ActionModal {
  type: ModalActionKind.OPEN_MODAL,
  payload: boolean
}

type ModalState = {
  isModalOpen: boolean,
  modalType: TodoModalType
}

function modalReducer(state: ModalState, action: ActionModalType | ActionModal): ModalState {
  const { type, payload } = action;

  if (type === ModalActionKind.OPEN_MODAL) {
    return { ...state, isModalOpen: payload };
  }

  if (type === ModalActionKind.CLOSE_MODAL) {
    return { ...state, modalType: payload, isModalOpen: true };
  }

  return state;

}

export default modalReducer;
