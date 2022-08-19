import React, { useContext, useEffect, useReducer } from 'react';
import mockData from './mockData';
import reducer from './reducer';
import { TodoActionKind } from './enums';

// const initialState: AppContextInterface = {
//   data: mockData as Data[],
//   isModalOpen: false
// }

const initialState: TodoState = {
  data: mockData as Data[],
  isModalOpen: false
}

const AppContext = React.createContext<AppContextInterface | null>(null);

const AppProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // getData();
  }, [])

  const addTodo = (data: Data) => {
    dispatch({ type: TodoActionKind.ADD, payload: data });
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
      <AppContext.Provider value= {{...state, addTodo, deleteTodo, changeModalState }} >
        {children}
      </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
