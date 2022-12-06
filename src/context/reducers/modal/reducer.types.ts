import { ModalActionKind, TodoModalType } from '../../../enums';

export interface ActionModalType {
  type: ModalActionKind.OPEN_MODAL,
  payload: TodoModalType
}

export interface ActionModal {
  type: ModalActionKind.CLOSE_MODAL
}

export type ModalState = {
  isModalOpen: boolean,
  modalType: TodoModalType
}
