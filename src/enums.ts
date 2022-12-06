export enum TodoActionKind {
  ADD = 'ADD',
  GET = 'GET',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
  CLEAR = 'CLEAR',
  SET_DATA = 'SET_DATA'
}

export enum ModalActionKind {
  CLOSE_MODAL = 'CHANGE_MODAL',
  OPEN_MODAL = 'OPEN_MODAL',
}

export enum TodoModalType {
  SHOW = 'SHOW',
  ADD = 'ADD',
  EDIT = 'EDIT',
  CONFIRM = 'CONFIRM',
}

export enum RestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}
