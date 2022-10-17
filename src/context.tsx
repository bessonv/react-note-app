import React, { useCallback, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import { TodoActionKind, TodoModalType } from './enums';
import { fetchApiData } from './api';

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

enum RestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

const AppContext = React.createContext<AppContextInterface | null>(null);

const AppProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const search = useCallback((query: string) => {
  //   fetchSearch(query);
  // }, [fetchSearch])

  useEffect(() => {
    showAllTodos();
  }, [])

  const showAllTodos = () => {
    fetchApiData(RestMethod.GET, 'todos').then(resonse => {
      if (resonse?.count) {
        dispatch({ type: TodoActionKind.SET_DATA, payload: resonse.items });
      }
    });
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
    fetchApiData(RestMethod.POST, 'todos', JSON.stringify(body)).then(response => {
      if (response) {
        const { key, name, description, created } = response;
        const newData: Data = {
          key, name, description, created
        }
        dispatch({ type: TodoActionKind.ADD, payload: newData });
      }
    })
  }

  const editTodo = (editData: Data) => {
    const body = {
      name: editData.name,
      description: editData.description,
      created: editData.created.toLocaleDateString()
    }
    fetchApiData(RestMethod.PUT, `todos/${editData.key}`, JSON.stringify(body)).then(response => {
      const { key, name, description, created } = response;
      dispatch({ type: TodoActionKind.EDIT, payload: {key, name, description, created} });
    })
  }

  const deleteTodo = (id: number) => {
    fetchApiData(RestMethod.DELETE, `todos/${id}`).then(response => {
      if (response.message === 'deleted') {
        dispatch({ type: TodoActionKind.DELETE, payload: id });
      } else {
        console.error('item was not deleted', response);
      }
    })
  }

  const closeModal = () => {
    dispatch({ type: TodoActionKind.OPEN_MODAL, payload: false });
  }

  const search = (query: string) => {
    // TODO: add to use callback
    if (query) {
      fetchApiData(RestMethod.GET, `search-by-str/${query}`).then(response => {
        if (response.length) {
          dispatch({ type: TodoActionKind.SET_DATA, payload: response });
        }
      })
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
