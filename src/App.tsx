import './App.scss';
import NoteList from './components/NoteList/NoteList';
import Modal from './components/Modal/Modal';
import AddForm from './components/AddForm/AddForm';
import Display from './components/Display/Display';
import Search from './components/Search/Search';
import Confirm from './components/Confirm/Confirm';
import Button from './components/Button/Button';

import { ModalType } from './enums';
import { useGlobalContext  } from './context/app.context';
import { withLayout } from './layout/layout';
import Preloader from './components/Preloader/Preloader';
import { ReactComponent as NewIcon } from './assets/pencil-empty.svg';


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
    [ModalType.SHOW]: <Display data={currentNoteItem} />,
    [ModalType.ADD]: <AddForm />,
    [ModalType.EDIT]: <AddForm note={currentNoteItem} />,
    [ModalType.CONFIRM]: <Confirm data={currentNoteItem} />
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
          <NewIcon className='control__button-icon'/>
          Add note
        </Button>
      </div>
      <Preloader show={isLoaded}>
        <NoteList data={data} />
      </Preloader>
      <Modal>{mHash[modalType]}</Modal>
    </>
  );
}

export default withLayout(App);
