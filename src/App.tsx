import './App.scss';
import { MouseEvent } from 'react';
import TodoList from './components/TodoList/TodoList';
import Modal from './components/Modal/Modal';
import AddForm from './components/AddForm/AddForm';
import Display from './components/Display/Display';

import { useGlobalContext  } from './context';

function App() {
  const state = useGlobalContext() as AppContextInterface;

  const handleModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    state.clearCurrent();
    state.changeModalState(!state.isModalOpen)
  }
  
  return (
    <>
      <header>
        <h2>To-Do List</h2>
      </header>
      <main>
        <div className="control">
          <input type="text" className="control__search todo-input" placeholder="search"/>
          <button onClick={handleModal} className="control__button button-medium">Add new ToDo</button>
        </div>
        <TodoList data={state.data} />
        {
          state.isModalOpen && 
          <Modal >
            { state.currentTodoItem ? <Display data={state.currentTodoItem} /> : <AddForm /> }
          </Modal>
        }
      </main>
    </>
  );
}

export default App;
