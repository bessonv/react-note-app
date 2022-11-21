import './App.scss';
import TodoList from './components/TodoList/TodoList';
import Modal from './components/Modal/Modal';
import AddForm from './components/AddForm/AddForm';
import Display from './components/Display/Display';
import Search from './components/Search/Search';
import Confirm from './components/Confirm/Confirm';

import { TodoModalType } from './enums';
import { useGlobalContext  } from './context/app.context';
import { withLayout } from './layout/layout';


type ModalHash = {
  [T in TodoModalType]: JSX.Element
}

function App() {
  const state = useGlobalContext() as AppContextInterface;

  let mHash: ModalHash = {
    [TodoModalType.SHOW]: <Display data={state.currentTodoItem || undefined} />,
    [TodoModalType.ADD]: <AddForm />,
    [TodoModalType.EDIT]: <AddForm todo={state.currentTodoItem || undefined} />,
    [TodoModalType.CONFIRM]: <Confirm data={state.currentTodoItem || undefined} />
  };
  
  return (
    <>
      <div className="control">
        <Search className="control__search"/>
        <button 
          onClick={state.showAddTodo} 
          className="control__button button-medium"
        >
          Add new ToDo
        </button>
      </div>
      {
        state.isLoaded ? 
          <TodoList data={state.data} /> : 
          <div className='loading_message'>Loading</div>
      }
      <Modal>
        { mHash[state.modalType] }
      </Modal>
    </>
  );
}

export default withLayout(App);
