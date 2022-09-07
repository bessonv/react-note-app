import './App.scss';
import TodoList from './components/TodoList/TodoList';
import Modal from './components/Modal/Modal';
import AddForm from './components/AddForm/AddForm';
import Display from './components/Display/Display';
import Search from './components/Search/Search';

import { TodoModalType } from './enums';

import { useGlobalContext  } from './context';

function App() {
  const state = useGlobalContext() as AppContextInterface;
  
  return (
    <>
      <header>
        <h2>To-Do List</h2>
      </header>
      <main>
        <div className="control">
          <Search />
          <button onClick={state.showAddTodo} className="control__button button-medium">Add new ToDo</button>
        </div>
        <TodoList data={state.data} />
        {
          state.isModalOpen && 
          <Modal >
            { state.modalType === TodoModalType.SHOW && <Display data={state.currentTodoItem || undefined} /> }
            { state.modalType === TodoModalType.ADD && <AddForm /> }
            { state.modalType === TodoModalType.EDIT && <AddForm todo={state.currentTodoItem || undefined} />}
          </Modal>
        }
      </main>
    </>
  );
}

export default App;
