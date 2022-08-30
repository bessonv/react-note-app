import { TodoActionKind } from './enums';

function reducer(state: TodoState, action: TodoAction): TodoState {
  const { type, payload } = action;

  if (type ===  TodoActionKind.GET) {
    const currentTodoItem = state.data.find(el => el.key === payload);
    if (currentTodoItem) // TODO: show error
      return { ...state, currentTodoItem }
  }

  if (type === TodoActionKind.CLOSE_MODAL) {
    return { ...state, modalType: payload, isModalOpen: true }
  }

  if (type === TodoActionKind.CLEAR) {
    return { ...state, currentTodoItem: null }
  }

  if (type === TodoActionKind.ADD) {
    const newTodo: Data = {
      key: state.data[state.data.length - 1].key + 1,
      name: payload.name,
      description: payload.description,
      createdDate: new Date()
    }
    const newData = [...state.data, newTodo];
    return { ...state, data: newData, isModalOpen: false };
  }

  if (type === TodoActionKind.EDIT) {
    const newData = state.data.map(item => {
      if (item.key === payload.id) {
        const editedTodo: Data = {
          ...item, name: payload.name, description: payload.description
        }
        return editedTodo;
      }
      return item;
    });
    return { ...state, data: newData, isModalOpen: false };
  }

  if (type === TodoActionKind.DELETE) {
    let newData = state.data.filter(item => item.key !== payload);
    return { ...state, data: newData };
  }

  if (type === TodoActionKind.OPEN_MODAL) {
    return { ...state, isModalOpen: payload }
  }

  return state;
  // throw new Error('no matching action type');
}

export default reducer;