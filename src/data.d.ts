type Data = {
  key: number,
  name: string,
  description: string,
  createdDate: Date
}


type TodoState = {
  data: Data[],
  currentTodoItem: Data | null,
  searchQuery: string,
  isModalOpen: boolean,
  modalType: TodoModalType
}

interface AppContextInterface {
  data: Data[],
  currentTodoItem: Data | null,
  searchQuery: string,
  isModalOpen: boolean,
  modalType: TodoModalType,
  showTodo(id: number): void,
  showEditTodo(id: number): void,
  showAddTodo(): void,
  clearCurrent(): void,
  addTodo(name: string, description: string): void,
  editTodo(id: number, name: string, description: string): void,
  deleteTodo(id: number): void,
  closeModal(): void,
  search(query: string): void
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
  type: TodoActionKind.OPEN_MODAL | TodoActionKind.CLEAR | TodoActionKind.GET_DATA,
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

interface TodoActionFilter {
  type: TodoActionKind.FILTER,
  payload: string
}

type TodoAction = TodoActionData | TodoActionId | TodoActionModal | TodoActionEdit | TodoActionModalType | TodoActionFilter;

enum TodoActionKind {
  ADD = 'ADD',
  GET = 'GET',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
  OPEN_MODAL = 'OPEN_MODAL',
  CLEAR = 'CLEAR',
  CLOSE_MODAL = 'CLOSE_MODAL',
  FILTER = 'FILTER',
  GET_DATA = 'GET_DATA'
}

enum TodoModalType {
  SHOW = 'SHOW',
  ADD = 'ADD',
  EDIT = 'EDIT'
}
