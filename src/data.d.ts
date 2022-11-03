type Data = {
  key: number,
  name: string,
  description: string,
  created: Date
}


type TodoState = {
  data: Data[],
  isLoaded: boolean,
  currentTodoItem: Data | null,
  searchQuery: string,
  isModalOpen: boolean,
  modalType: TodoModalType
}

interface AppContextInterface {
  data: Data[],
  isLoaded: boolean,
  currentTodoItem: Data | null,
  searchQuery: string,
  isModalOpen: boolean,
  modalType: TodoModalType,
  showTodo(id: number): void,
  showAllTodos(): void,
  showEditTodo(id: number): void,
  showAddTodo(): void,
  clearCurrent(): void,
  addTodo(name: string, description: string): void,
  editTodo(editData: Data): void,
  showDeleteTodo(id: number): void,
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

interface TodoActionModal {
  type: TodoActionKind.OPEN_MODAL | TodoActionKind.CLEAR,
  payload: boolean
}

interface TodoActionEdit {
  type: TodoActionKind.EDIT,
  payload: Data
}

interface TodoActionModalType {
  type: TodoActionKind.CLOSE_MODAL,
  payload: TodoModalType
}

type TodoAction = TodoActionData | TodoActionId | TodoActionModal | TodoActionEdit | TodoActionModalType | TodoActionDataArr;

enum TodoActionKind {
  ADD = 'ADD',
  GET = 'GET',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
  OPEN_MODAL = 'OPEN_MODAL',
  CLEAR = 'CLEAR',
  CLOSE_MODAL = 'CLOSE_MODAL',
  SET_DATA = 'SET_DATA'
}

enum TodoModalType {
  SHOW = 'SHOW',
  ADD = 'ADD',
  EDIT = 'EDIT',
  CONFIRM = 'CONFIRM'
}
