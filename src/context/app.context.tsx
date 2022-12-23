import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { ProviderProps, AppContextInterface } from './context.types';
import { TodoState } from './reducers/list/reducer.types';
import { ModalState } from './reducers/modal/reducer.types';
import { TodoActionKind, TodoModalType, ModalActionKind } from '../enums';
import listReducer from './reducers/list/list.reducer';
import modalReducer from './reducers/modal/modal.reducer';
import { API, fetchApiData } from '../api/api';

const listInitialState: TodoState = {
  data: [] as Data[],
  currentTodoItem: null
}

const modalInitState: ModalState = {
  isModalOpen: false,
  modalType: TodoModalType.SHOW
}

const AppContext = createContext<AppContextInterface | null>(null);

const AppProvider = ({ children, initialList, initialModal, functions }: ProviderProps) => {
  const [listState, dispatchList] = useReducer(listReducer, initialList ?? listInitialState);
  const [modalState, dispatchModal] = useReducer(modalReducer, initialModal ?? modalInitState);
  const [isLoaded, setLoadState] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const showAllTodos = async () => {
    const resonse = await fetchApiData(API.getList.method, API.getList.url);
    if (resonse?.count) {
      dispatchList({ type: TodoActionKind.SET_DATA, payload: resonse.items });
      setLoadState(true);
    }
  }

  const showEditTodo = (id: number) => {
    dispatchList({ type: TodoActionKind.GET, payload: id });
    dispatchModal({ type: ModalActionKind.OPEN_MODAL, payload: TodoModalType.EDIT });
  }

  const showAddTodo = () => {
    dispatchModal({ type: ModalActionKind.OPEN_MODAL, payload: TodoModalType.ADD });
  }

  const showTodo = (id: number) => {
    dispatchList({ type: TodoActionKind.GET, payload: id });
    dispatchModal({ type: ModalActionKind.OPEN_MODAL, payload: TodoModalType.SHOW });
  }

  const showDeleteTodo = (id: number) => {
    dispatchList({ type: TodoActionKind.GET, payload: id });
    dispatchModal({ type: ModalActionKind.OPEN_MODAL, payload: TodoModalType.CONFIRM });
  }

  const closeModal = () => {
    dispatchModal({ type: ModalActionKind.CLOSE_MODAL });
  }

  const clearCurrent = () => {
    dispatchList({ type: TodoActionKind.CLEAR, payload: true });
  }

  const addTodo = async (name: string, description: string) => {
    const body = {
      name,
      description,
      created: new Date().getTime()
    }
    const response = await fetchApiData(
      API.add.method,
      API.add.url, 
      JSON.stringify(body));
    if (response) {
      const { key, name, description, created } = response;
      const newData: Data = {
        key, name, description, created
      }
      dispatchList({ type: TodoActionKind.ADD, payload: newData });
      dispatchModal({ type: ModalActionKind.CLOSE_MODAL });
    }
  }

  const editTodo = async (editData: Data) => {
    const body = {
      name: editData.name,
      description: editData.description,
      created: editData.created.toLocaleDateString()
    }
    const response = await fetchApiData(
      API.edit.method, 
      API.edit.url(editData.key), 
      JSON.stringify(body));
    const { key, name, description, created } = response;
    dispatchList({ type: TodoActionKind.EDIT, payload: {key, name, description, created} });
    dispatchModal({ type: ModalActionKind.CLOSE_MODAL });
  }

  const deleteTodo = async (id: number) => {
    const response = await fetchApiData(API.delete.method, API.delete.url(id));
    if (response.message === 'deleted') {
      dispatchList({ type: TodoActionKind.DELETE, payload: id });
    } else {
      console.error('item was not deleted', response);
    }
  }

  const search = async (query: string) => {
    if (query) {
      const response = await fetchApiData(API.search.method, API.search.url(query));
      if (!response.length) return;
      dispatchList({ type: TodoActionKind.SET_DATA, payload: response });
    } else {
      showAllTodos();
    }
  };

  return (
      <AppContext.Provider value= {
        {
          ...listState,
          ...modalState,
          isLoaded,
          searchQuery,
          showTodo,
          showAllTodos, 
          clearCurrent, 
          showAddTodo, 
          addTodo, 
          showEditTodo, 
          editTodo,
          showDeleteTodo,
          deleteTodo, 
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
