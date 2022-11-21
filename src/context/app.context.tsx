import React, { useContext, useEffect, useReducer } from 'react';
import reducer from './app.reducer';
import { TodoActionKind, TodoModalType } from '../enums';
import { API, fetchApiData } from '../api/api';

type ProviderProps = {
  children?: React.ReactNode
}

const initialState: TodoState = {
  data: [] as Data[],
  isLoaded: false,
  searchQuery: '',
  currentTodoItem: null,
  isModalOpen: false,
  modalType: TodoModalType.SHOW
}

const AppContext = React.createContext<AppContextInterface | null>(null);

const AppProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    showAllTodos();
  }, [])

  const showAllTodos = async () => {
    const resonse = await fetchApiData(API.getList.method, API.getList.url);
    if (resonse?.count) {
      dispatch({ type: TodoActionKind.SET_DATA, payload: resonse.items });
    }
  }

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
      dispatch({ type: TodoActionKind.ADD, payload: newData });
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
    dispatch({ type: TodoActionKind.EDIT, payload: {key, name, description, created} });
  }

  const showDeleteTodo = (id: number) => {
    dispatch({ type: TodoActionKind.GET, payload: id });
    dispatch({ type: TodoActionKind.CLOSE_MODAL, payload: TodoModalType.CONFIRM });
  }

  const deleteTodo = async (id: number) => {
    const response = await fetchApiData(API.delete.method, API.delete.url(id));
    if (response.message === 'deleted') {
      dispatch({ type: TodoActionKind.DELETE, payload: id });
    } else {
      console.error('item was not deleted', response);
    }
  }

  const closeModal = () => {
    dispatch({ type: TodoActionKind.OPEN_MODAL, payload: false });
  }

  const search = async (query: string) => {
    if (query) {
      const response = await fetchApiData(API.search.method, API.search.url(query));
      if (!response.length) return;
      dispatch({ type: TodoActionKind.SET_DATA, payload: response });
    } else {
      showAllTodos();
    }
  };

  return (
      <AppContext.Provider value= {
        {
          ...state, 
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
