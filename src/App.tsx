import './App.scss';
import NoteList from './components/TodoList/NoteList';
import Modal from './components/Modal/Modal';
import AddForm from './components/AddForm/AddForm';
import Display from './components/Display/Display';
import Search from './components/Search/Search';
import Confirm from './components/Confirm/Confirm';
import Button from './components/Button/Button';

import { ModalType } from './enums';
import { useGlobalContext  } from './context/app.context';
import { withLayout } from './layout/layout';


type ModalHash = {
  [T in ModalType]: JSX.Element
}

function App() {
  const {
    currentNoteItem,
    showAddModal,
    isLoaded,
    data,
    modalType,
  } = useGlobalContext();

  let mHash: ModalHash = {
    [ModalType.SHOW]: <Display data={currentNoteItem || undefined} />,
    [ModalType.ADD]: <AddForm />,
    [ModalType.EDIT]: <AddForm note={currentNoteItem || undefined} />,
    [ModalType.CONFIRM]: <Confirm data={currentNoteItem || undefined} />
  };
  
  return (
    <>
      <div className="control">
        <Search className="control__search"/>
        <Button
          className='control__button'
          shape="default"
          onClick={showAddModal}
        >
          Add new ToDo
        </Button>
      </div>
      {
        isLoaded ? 
          <NoteList data={data} /> : 
          <div className='loading_message'>Loading</div>
      }
      <Modal>{mHash[modalType]}</Modal>
    </>
  );
}

export default withLayout(App);
