import { TodoActionKind } from '../../../enums';

interface TodoActionDataArr {
  type: TodoActionKind.SET_DATA,
  payload: Data[]
}

interface TodoActionData {
  type: TodoActionKind.ADD,
  payload: Data
}

interface TodoActionId {
  type: TodoActionKind.DELETE | TodoActionKind.GET,
  payload: number
}

interface TodoActionCurrent {
  type: TodoActionKind.CLEAR,
  payload: boolean
}

interface TodoActionEdit {
  type: TodoActionKind.EDIT,
  payload: Data
}

export type TodoAction = TodoActionData | TodoActionId | TodoActionCurrent | TodoActionEdit | TodoActionDataArr;

export type TodoState = {
  data: Data[],
  currentTodoItem: Data | null,
}
