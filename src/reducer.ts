import { TodoActionKind } from './enums';

function reducer(state: TodoState, action: TodoActionData | TodoActionModal | TodoActionId): TodoState {
  const { type, payload } = action;

  if (type ===  TodoActionKind.GET) {
    const currentTodoItem = state.data.find(el => el.key === payload);
    if (currentTodoItem) // TODO: show error
      return { ...state, currentTodoItem }
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
    return { ...state, data: newData };
  }

  if (type === TodoActionKind.DELETE) {
    let newData = state.data.filter(item => item.key !== payload);
    return { ...state, data: newData };
  }

  if (type === TodoActionKind.MODAL) {
    console.log('modal', payload);
    return { ...state, isModalOpen: payload }
  }

  return state;
  // throw new Error('no matching action type');
}

export default reducer;