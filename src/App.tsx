import './App.css';
import TodoList from './components/TodoList/TodoList';
import Modal from './components/Modal/Modal';
import AddForm from './components/AddForm/AddForm';
import Display from './components/Display/Display';

import { useGlobalContext  } from './context';

function App() {
  const state  = useGlobalContext() as AppContextInterface;

  const handleModal = () => {
    state.clearCurrent();
    state.changeModalState(!state.isModalOpen)
  }
  
  return (
    <>
      <button onClick={handleModal}>Add new ToDo</button>
      <TodoList data={state.data} />
      {
        state.isModalOpen && 
        <Modal >
          { state.currentTodoItem ? <Display data={state.currentTodoItem} /> : <AddForm /> }
        </Modal>
      }
    </>
  );
}

export default App;
