import React, { useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import { TodoActionKind, TodoModalType } from './enums';

type ProviderProps = {
  children?: React.ReactNode
}

const initialState: TodoState = {
  data: [] as Data[],
  searchQuery: '',
  currentTodoItem: null,
  isModalOpen: false,
  modalType: TodoModalType.SHOW
}

const AppContext = React.createContext<AppContextInterface | null>(null);

const AppProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: TodoActionKind.GET_DATA, payload: true });
  }, [])

  const showEditTodo = (id: number) => {
    dispatch({ type: TodoActionKind.GET, payload: id });
    dispatch({ type: TodoActionKind.CLOSE_MODAL, payload: TodoModalType.EDIT });
  }

  const showAddTodo = () => {
    dispatch({ type: TodoActionKind.CLOSE_MODAL, payload: TodoModalType.ADD });
  }

  const showTodo = (id: number) => {
    dispatch({ type: TodoActionKind.GET, payload: id });
    dispatch({ type: TodoActionKind.CLOSE_MODAL, payload: TodoModalType.SHOW });
  }

  const clearCurrent = () => {
    dispatch({ type: TodoActionKind.CLEAR, payload: true });
  }

  const addTodo = (name: string, description: string) => {
    dispatch({ type: TodoActionKind.ADD, payload: {name, description} });
  }

  const editTodo = (id: number, name: string, description: string) => {
    dispatch({ type: TodoActionKind.EDIT, payload: {id, name, description} });
  }

  const deleteTodo = (id: number) => {
    dispatch({ type: TodoActionKind.DELETE, payload: id });
  }

  const closeModal = () => {
    dispatch({ type: TodoActionKind.OPEN_MODAL, payload: false });
  }

  const search = (query: string) => {
    // TODO: change when API is ready
    // if (query) {
      dispatch({ type: TodoActionKind.FILTER, payload: query });
    // } else {
    //   dispatch({ type: TodoActionKind.GET_DATA, payload: true });
    // }
  }

  return (
      <AppContext.Provider value= {
        {
          ...state, 
          showTodo, 
          clearCurrent, 
          showAddTodo, 
          addTodo, 
          showEditTodo, 
          editTodo, 
          deleteTodo, 
          closeModal,
          search
        }
      } >
        {children}
      </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
