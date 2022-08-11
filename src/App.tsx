import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import Modal from './components/Modal/Modal';
import AddForm from './components/AddForm/AddForm';

const mockData: Data[] = [
  { key: 0, name: 'Do a thing', description: 'Carefully', createdDate: new Date() },
  { key: 1, name: 'Do a thing', description: 'Carefully', createdDate: new Date() },
  { key: 2, name: 'Do a thing', description: 'Carefully', createdDate: new Date() },
  { key: 3, name: 'Do a thing', description: 'Carefully', createdDate: new Date() },
  { key: 4, name: 'Do a thing', description: 'Carefully', createdDate: new Date() },
  { key: 5, name: 'Do a thing', description: 'Carefully', createdDate: new Date() },
];

function App() {
  const [data, setData] = useState<Data[]>([]);
  const [isModalOpen, changeModalState] = useState<boolean>(false);

  useEffect(() => {
    setData(mockData);
  }, [])

  const handleModal = () => {
    changeModalState(!isModalOpen)
  }

  const addTodo = (name: string, description: string) => {
    
    const newTodo: Data = {
      key: data[data.length - 1].key + 1,
      name,
      description,
      createdDate: new Date()
    }
    data.push(newTodo);
    changeModalState(false);
    setData(data);
  }

  const removeTodo = (key: number) => {
    const newData = data.filter(item => item.key !== key)
    setData(newData)
  }

  return (
    <>
      <button onClick={handleModal}>Add new ToDo</button>
      <TodoList data={data} removeItem={removeTodo} />
      {
        isModalOpen && 
        <Modal closeModal={handleModal}>
          <AddForm saveForm={addTodo}/>
        </Modal>
      }
    </>
  );
}

export default App;
