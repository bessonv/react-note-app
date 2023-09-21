import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { ProviderProps, AppContextInterface } from './context.types';
import { NoteState } from './reducers/list/reducer.types';
import { ModalState } from './reducers/modal/reducer.types';
import { NoteActionKind, ModalType, ModalActionKind } from '../enums';
import listReducer from './reducers/list/list.reducer';
import modalReducer from './reducers/modal/modal.reducer';
import { apiGetNotes, apiEditNote, apiAddNote, apiDeleteNote, apiSearchNotes } from '../api/api';

const listInitialState: NoteState = {
  data: [] as Data[],
  currentNoteItem: null
}

const modalInitState: ModalState = {
  isModalOpen: false,
  modalType: ModalType.SHOW
}

const AppContext = createContext<AppContextInterface | null>(null);

const AppProvider = ({ children, initialList, initialModal, functions }: ProviderProps) => {
  const [listState, dispatchList] = useReducer(listReducer, initialList ?? listInitialState);
  const [modalState, dispatchModal] = useReducer(modalReducer, initialModal ?? modalInitState);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isFetching, setFetching] = useState<boolean>(false);

  useEffect(() => {
    showAllNotes();
  }, []);

  const showAllNotes = async () => {
    const response = await apiGetNotes();
    if (response?.count) {
      dispatchList({ type: NoteActionKind.SET_DATA, payload: response.items });
      setIsLoaded(true);
    }
  }

  const showEditModal = (id: string) => {
    dispatchList({ type: NoteActionKind.GET, payload: id });
    dispatchModal({ type: ModalActionKind.OPEN_MODAL, payload: ModalType.EDIT });
  }

  const showAddModal = () => {
    dispatchModal({ type: ModalActionKind.OPEN_MODAL, payload: ModalType.ADD });
  }

  const showNote = (id: string) => {
    dispatchList({ type: NoteActionKind.GET, payload: id });
    dispatchModal({ type: ModalActionKind.OPEN_MODAL, payload: ModalType.SHOW });
  }

  const showDeleteModal = (id: string) => {
    dispatchList({ type: NoteActionKind.GET, payload: id });
    dispatchModal({ type: ModalActionKind.OPEN_MODAL, payload: ModalType.CONFIRM });
  }

  const closeModal = () => {
    dispatchModal({ type: ModalActionKind.CLOSE_MODAL });
  }

  const clearCurrent = () => {
    dispatchList({ type: NoteActionKind.CLEAR, payload: true });
  }

  const addNote = async (name: string, description: string) => {
    const body: NewData = {
      name,
      description,
      created: new Date()//.getTime()
    }
    setFetching(true);
    const response = await apiAddNote(body);
    setFetching(false);
    if (response) {
      const { key, name, description, created } = response;
      const newData: Data = {
        key, name, description, created
      }
      dispatchList({ type: NoteActionKind.ADD, payload: newData });
      dispatchModal({ type: ModalActionKind.CLOSE_MODAL });
    }
  }

  const editNote = async (editData: Data) => {
    const body: NewData = {
      name: editData.name,
      description: editData.description,
      created: editData.created//.getTime()
    }
    setFetching(true);
    const response = await apiEditNote(body, editData.key);
    setFetching(false);
    const { key, name, description, created } = response;
    dispatchList({ type: NoteActionKind.EDIT, payload: {key, name, description, created} });
    dispatchModal({ type: ModalActionKind.CLOSE_MODAL });
  }

  const deleteNote = async (id: string) => {
    const response = await apiDeleteNote(id);
    if (response.message === 'deleted') {
      dispatchList({ type: NoteActionKind.DELETE, payload: id });
    } else {
      console.error('item was not deleted', response);
    }
  }

  const search = async (query: string) => {
    if (!query) {
      showAllNotes();
      return;
    }
    setIsLoaded(false);
    const response = await apiSearchNotes(query);
    setIsLoaded(true);
    if (!response.length) return;
    dispatchList({ type: NoteActionKind.SET_DATA, payload: response });
  };

  return (
      <AppContext.Provider value= {
        {
          ...listState,
          ...modalState,
          isLoaded,
          isFetching,
          showNote,
          showAllNotes, 
          clearCurrent, 
          showAddModal, 
          addNote, 
          showEditModal, 
          editNote,
          showDeleteModal,
          deleteNote, 
          closeModal,
          search,
          ...functions
        }
      } >
        {children}
      </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(AppContext)
  if (context === null) {
    throw Error("useGlobalContext must be within AppProvider");
  }
  return context;
}

export { AppContext, AppProvider }
