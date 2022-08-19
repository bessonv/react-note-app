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
  closeModal: () => void,
  children?: React.ReactNode
  // children?: JSX.Element
}

type FormProps = {
}

type DisplayProps = {
  data?: Data | null
}

interface AppContextInterface {
  data: Data[],
  isModalOpen: boolean,
  addTodo(data: Data): void,
  deleteTodo(id: number): void,
  changeModalState(isOpen: boolean): void
}

interface TodoActionData {
  type: TodoActionKind.ADD,
  payload: Data
}

interface TodoActionId {
  type: TodoActionKind.DELETE,
  payload: number
}

interface TodoActionModal {
  type: TodoActionKind.MODAL,
  payload: boolean
}

enum TodoActionKind {
  ADD = 'ADD',
  DELETE = 'DELETE',
  MODAL = 'MODAL'
}

type ProviderProps = {
  children?: React.ReactNode
}

type TodoState = {
  data: Data[],
  isModalOpen: boolean
}
