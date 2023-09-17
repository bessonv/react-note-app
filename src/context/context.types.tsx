import { ModalType } from "../enums"
import { NoteState } from "./reducers/list/reducer.types"
import { ModalState } from "./reducers/modal/reducer.types"

export type ProviderProps = {
  children?: React.ReactNode,
  initialList?: NoteState,
  initialModal?: ModalState,
  functions?: {
    showNote?(id: string): void,
    showAllNotes?(): void,
    showEditModal?(id: string): void,
    showAddModal?(): void,
    showDeleteModal?(id: string): void,
    clearCurrent?(): void,
    addNote?(name: string, description: string): void,
    editNote?(editData: Data): void,
    deleteNote?(id: string): void,
    closeModal?(): void,
    search?(query: string): void
  }
}

export interface AppContextInterface {
  data: Data[],
  isLoaded: boolean,
  currentNoteItem: Data | null,
  searchQuery: string,
  isModalOpen: boolean,
  modalType: ModalType,
  showNote(id: string): void,
  showAllNotes(): void,
  showEditModal(id: string): void,
  showAddModal(): void,
  showDeleteModal(id: string): void,
  clearCurrent(): void,
  addNote(name: string, description: string): void,
  editNote(editData: Data): void,
  deleteNote(id: string): void,
  closeModal(): void,
  search(query: string): void
}
