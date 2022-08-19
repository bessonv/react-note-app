import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import Modal from './components/Modal/Modal';
import AddForm from './components/AddForm/AddForm';
import Display from './components/Display/Display';

import { useGlobalContext  } from './context';

function App() {
  const state  = useGlobalContext();
  // const [data, setData] = useState<Data[]>([]);
  // const [isModalOpen, changeModalState] = useState<boolean>(false);
  // const [current, changeCurrent] = useState<Data | null>(null);

  // useEffect(() => {
  //   setData(mockData);
  // }, [])

  const handleModal = () => {
    state?.changeModalState(!state.isModalOpen)
    // changeModalState(!isModalOpen)
    // changeCurrent(null);
  }

  // const addTodo = (name: string, description: string) => {
    
  //   const newTodo: Data = {
  //     key: data[data.length - 1].key + 1,
  //     name,
  //     description,
  //     createdDate: new Date()
  //   }
  //   data.push(newTodo);
  //   changeModalState(false);
  //   setData(data);
  // }

  // const removeTodo = (key: number) => {
  //   const newData = data.filter(item => item.key !== key)
  //   setData(newData)
  // }

  // const showTodo = (key: number) => {
  //   const newCurrent = data.find(item => item.key === key);
  //   changeModalState(true);
  //   newCurrent && changeCurrent(newCurrent)
  // }
  
  return (
    <>
      <button onClick={handleModal}>Add new ToDo</button>
      <TodoList data={state?.data} />
      {
        state?.isModalOpen && 
        <Modal closeModal={handleModal}>
          <AddForm /> 
        </Modal>
      }
    </>
  );
}

export default App;
