type Data = {
  key: number,
  name: string,
  description: string,
  createdDate: Date
}

interface AppContextInterface {
  data: Data[],
  currentTodoItem: Data | null,
  isModalOpen: boolean,
  modalType: TodoModalType,
  showTodo(id: number): void,
  showEditTodo(id: number): void,
  showAddTodo(): void,
  clearCurrent(): void,
  addTodo(name: string, description: string): void,
  editTodo(id: number, name: string, description: string): void,
  deleteTodo(id: number): void,
  closeModal(): void
}

type AddObject = {
  name: string,
  description: string
}

type EditObject = {
  id: number,
  name: string,
  description: string
}

interface TodoActionData {
  type: TodoActionKind.ADD,
  payload: AddObject
}

interface TodoActionId {
  type: TodoActionKind.DELETE | TodoActionKind.GET,
  payload: number
}

interface TodoActionModal {
  type: TodoActionKind.OPEN_MODAL | TodoActionKind.CLEAR,
  payload: boolean
}

interface TodoActionEdit {
  type: TodoActionKind.EDIT,
  payload: EditObject
}

interface TodoActionModalType {
  type: TodoActionKind.CLOSE_MODAL,
  payload: TodoModalType
}

type TodoAction = TodoActionData | TodoActionId | TodoActionModal | TodoActionEdit | TodoActionModalType;

enum TodoActionKind {
  ADD = 'ADD',
  GET = 'GET',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
  OPEN_MODAL = 'OPEN_MODAL',
  CLEAR = 'CLEAR',
  CLOSE_MODAL = 'CLOSE_MODAL'
}

enum TodoModalType {
  SHOW = 'SHOW',
  ADD = 'ADD',
  EDIT = 'EDIT'
}

type TodoState = {
  data: Data[],
  currentTodoItem: Data | null,
  isModalOpen: boolean,
  modalType: TodoModalType
}
