import { NoteActionKind } from '../../../enums';
import { NoteAction, NoteState } from './reducer.types';

function listReducer(state: NoteState, action: NoteAction): NoteState {
  const { type, payload } = action;

  if (type ===  NoteActionKind.GET) {
    const currentNoteItem = state.data.find(el => el.key === payload);
    if (currentNoteItem) // TODO: show error
      return { ...state, currentNoteItem: currentNoteItem };
  }

  if (type === NoteActionKind.CLEAR) {
    return { ...state, currentNoteItem: null };
  }

  if (type === NoteActionKind.ADD) {
    const {key, name, description, created } = payload;
    const newNote: Data = {
      key,
      name,
      description,
      created: new Date(Number(created) || created)
    }
    const newData = [...state.data, newNote];
    return { ...state, data: newData };
  }

  if (type === NoteActionKind.EDIT) {
    const newData = state.data.map(item => {
      if (item.key === payload.key) {
        const { name, description, created } = payload;
        const editedTodo: Data = {
          ...item, 
          name, 
          description, 
          created: new Date(Number(created) || created)
        }
        return editedTodo;
      }
      return item;
    });
    return { ...state, data: newData };
  }

  if (type === NoteActionKind.DELETE) {
    let newData = state.data.filter(item => item.key !== payload);
    return { ...state, data: newData };
  }

  if (type === NoteActionKind.SET_DATA) {
    const data = payload.map((item: Data) => {
      const createdDate = Number(item.created) || item.created;
      return { ...item, created: new Date(createdDate) }
    })
    return { ...state, data };
  }
  
  throw Error('Unknown action');
}

export default listReducer;