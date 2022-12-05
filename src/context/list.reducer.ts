import { TodoActionKind } from '../enums';

function listReducer(state: TodoState, action: TodoAction): TodoState {
  const { type, payload } = action;

  if (type ===  TodoActionKind.GET) {
    const currentTodoItem = state.data.find(el => el.key === payload);
    if (currentTodoItem) // TODO: show error
      return { ...state, currentTodoItem };
  }

  if (type === TodoActionKind.CLEAR) {
    return { ...state, currentTodoItem: null };
  }

  if (type === TodoActionKind.ADD) {
    const {key, name, description, created } = payload;
    const newTodo: Data = {
      key,
      name,
      description,
      created: new Date(Number(created) || created)
    }
    const newData = [...state.data, newTodo];
    return { ...state, data: newData };
  }

  if (type === TodoActionKind.EDIT) {
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

  if (type === TodoActionKind.DELETE) {
    let newData = state.data.filter(item => item.key !== payload);
    return { ...state, data: newData };
  }

  if (type === TodoActionKind.SET_DATA) {
    const data = payload.map((item: Data) => {
      const createdDate = Number(item.created) || item.created;
      return { ...item, created: new Date(createdDate) }
    })
    return { ...state, data, isLoaded: true };
  }

  return state;
  // throw new Error('no matching action type');
}

export default listReducer;