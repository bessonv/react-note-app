import React, { useCallback, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import { TodoActionKind, TodoModalType } from './enums';
import { API_URL, apiOptions } from './api';

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
  // console.log('appprovider');

  // const search = useCallback((query: string) => {
  //   fetchSearch(query);
  // }, [fetchSearch])

  useEffect(() => {
    console.trace();
    console.log('useeffectprovider');
    showAllTodos();
  }, [])

  const showAllTodos = () => {
    fetch(
      `${API_URL}/todos`, apiOptions('GET')
    ).then(response => response.json()
    ).then(response => {
      console.log(response);
      if (response.count) {
        dispatch({ type: TodoActionKind.SET_DATA, payload: response.items });
      }
    }).catch(err => console.error(err))
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

  const addTodo = (name: string, description: string) => {
    const body = {
      name,
      description,
      created: new Date().getTime()
    }
    fetch(
      `${API_URL}/todos`, apiOptions('POST', JSON.stringify(body))
    ).then(response => response.json()
    ).then(response => {
      console.log(response);
      const { key, name, description, created } = response;
      const newData: Data = {
        key, name, description, created
      }
      dispatch({ type: TodoActionKind.ADD, payload: newData });
    }).catch(err => console.error(err))
  }

  const editTodo = (editData: Data) => {
    const body = {
      name: editData.name,
      description: editData.description,
      created: editData.created.toLocaleDateString()
    }
    fetch(
      `${API_URL}/todos/${editData.key}`, apiOptions('PUT', JSON.stringify(body))
    ).then(response => response.json()
    ).then(response => {
      console.log(response);
      const { key, name, description, created } = response;
      dispatch({ type: TodoActionKind.EDIT, payload: {key, name, description, created} });
    }).catch(err => console.error(err))
  }

  const deleteTodo = (id: number) => {
    fetch(
      `${API_URL}/todos/${id}`, apiOptions('DELETE')
    ).then(response => response.json()
    ).then(response => {
      console.log(response);
      if (response.message === 'deleted') {
        dispatch({ type: TodoActionKind.DELETE, payload: id });
      } else {
        console.error('item was not deleted', response);
      }
    }).catch(err => console.error(err))
  }

  const closeModal = () => {
    dispatch({ type: TodoActionKind.OPEN_MODAL, payload: false });
  }

  const search = (query: string) => {
    // TODO: add to use callback
    if (query) {
      fetch(
        `${API_URL}/search-by-str/${query}`, apiOptions('GET')
      ).then(response => response.json()
      ).then(response => {
        console.log(response);
        if (response.length) {
          dispatch({ type: TodoActionKind.SET_DATA, payload: response });
        }
      }).catch(err => console.error(err))
    } else {
      showAllTodos();
    }
  }

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
