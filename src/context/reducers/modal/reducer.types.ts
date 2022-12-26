import { ModalActionKind, ModalType } from '../../../enums';

export interface ActionModalType {
  type: ModalActionKind.OPEN_MODAL,
  payload: ModalType
}

export interface ActionModal {
  type: ModalActionKind.CLOSE_MODAL
}

export type ModalState = {
  isModalOpen: boolean,
  modalType: ModalType
}
