type Data = {
  key: number,
  name: string,
  description: string,
  createdDate: Date
} 

type ListProps = {
  data?: Data[]
}

type ItemProps = {
  data: Data,
  isShown?: boolean
}

type ModalProps = {
  children?: React.ReactNode
}

type FormProps = {
}

type DisplayProps = {
  data?: Data
}

interface AppContextInterface {
  data: Data[],
  currentTodoItem: Data | null,
  isModalOpen: boolean,
  showTodo(id: number): void,
  clearCurrent(): void,
  addTodo(name: string, description: string): void,
  deleteTodo(id: number): void,
  changeModalState(isOpen: boolean): void
}

type AddObject = {
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
  type: TodoActionKind.MODAL | TodoActionKind.CLEAR,
  payload: boolean
}

enum TodoActionKind {
  ADD = 'ADD',
  GET = 'GET',
  DELETE = 'DELETE',
  MODAL = 'MODAL',
  CLEAR = 'CLEAR'
}

type ProviderProps = {
  children?: React.ReactNode
}

type TodoState = {
  data: Data[],
  currentTodoItem: Data | null,
  isModalOpen: boolean
}
