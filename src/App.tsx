import './App.scss';
import NoteList from './components/TodoList/NoteList';
import Modal from './components/Modal/Modal';
import AddForm from './components/AddForm/AddForm';
import Display from './components/Display/Display';
import Search from './components/Search/Search';
import Confirm from './components/Confirm/Confirm';

import { ModalType } from './enums';
import { useGlobalContext  } from './context/app.context';
import { withLayout } from './layout/layout';
import { useEffect } from 'react';


type ModalHash = {
  [T in ModalType]: JSX.Element
}

function App() {
  const state = useGlobalContext();

  useEffect(() => {
    state.showAllNotes();
  }, []);

  let mHash: ModalHash = {
    [ModalType.SHOW]: <Display data={state.currentNoteItem || undefined} />,
    [ModalType.ADD]: <AddForm />,
    [ModalType.EDIT]: <AddForm note={state.currentNoteItem || undefined} />,
    [ModalType.CONFIRM]: <Confirm data={state.currentNoteItem || undefined} />
  };
  
  return (
    <>
      <div className="control">
        <Search className="control__search"/>
        <button 
          onClick={state.showAddModal} 
          className="control__button button-medium"
        >
          Add new ToDo
        </button>
      </div>
      {
        state.isLoaded ? 
          <NoteList data={state.data} /> : 
          <div className='loading_message'>Loading</div>
      }
      <Modal>
        { mHash[state.modalType] }
      </Modal>
    </>
  );
}

export default withLayout(App);
