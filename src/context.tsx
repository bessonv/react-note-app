import React, { useContext, useEffect, useReducer } from 'react';
import mockData from './mockData';
import reducer from './reducer';
import { TodoActionKind } from './enums';

const initialState: TodoState = {
  data: mockData as Data[],
  currentTodoItem: null,
  isModalOpen: false
}

const AppContext = React.createContext<AppContextInterface | null>(null);

const AppProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // getData();
  }, [])

  const showTodo = (id: number) => {
    dispatch({ type: TodoActionKind.GET, payload: id });
    dispatch({ type: TodoActionKind.MODAL, payload: true });
  }

  const clearCurrent = () => {
    dispatch({ type: TodoActionKind.CLEAR, payload: true });
  }

  const addTodo = (name: string, description: string) => {
    dispatch({ type: TodoActionKind.ADD, payload: {name, description} });
    dispatch({ type: TodoActionKind.MODAL, payload: false });
  }

  const deleteTodo = (id: number) => {
    dispatch({ type: TodoActionKind.DELETE, payload: id });
  }

  const changeModalState = (isOpen: boolean) => {
    dispatch({ type: TodoActionKind.MODAL, payload: isOpen });
  }

  // const getData = () => {
  //   const data = mockData;
  //   dispatch({ type: 'DISPLAY_ITEMS', payload: data });
  // }

  return (
      <AppContext.Provider value= {{...state, showTodo, clearCurrent, addTodo, deleteTodo, changeModalState }} >
        {children}
      </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
