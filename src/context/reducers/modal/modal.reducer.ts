import { ModalActionKind } from '../../../enums';
import { ActionModalType, ActionModal, ModalState } from './reducer.types';

function modalReducer(state: ModalState, action: ActionModalType | ActionModal): ModalState {
  if (action.type === ModalActionKind.CLOSE_MODAL) {
    return { ...state, isModalOpen: false };
  }

  if (action.type === ModalActionKind.OPEN_MODAL) {
    return { ...state, modalType: action.payload, isModalOpen: true };
  }

  throw Error('Unknown action');
}

export default modalReducer;
