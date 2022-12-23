import { TodoModalType } from "../enums"
import { TodoState } from "./reducers/list/reducer.types"
import { ModalState } from "./reducers/modal/reducer.types"

export type ProviderProps = {
  children?: React.ReactNode,
  initialList?: TodoState,
  initialModal?: ModalState,
  functions?: {
    showTodo?(id: number): void,
    showAllTodos?(): void,
    showEditTodo?(id: number): void,
    showAddTodo?(): void,
    clearCurrent?(): void,
    addTodo?(name: string, description: string): void,
    editTodo?(editData: Data): void,
    showDeleteTodo?(id: number): void,
    deleteTodo?(id: number): void,
    closeModal?(): void,
    search?(query: string): void
  }
}

export interface AppContextInterface {
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
