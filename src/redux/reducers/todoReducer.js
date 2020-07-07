import { v4 as uuidv4 } from "uuid";

const todoInitialState = [
  {
    id: uuidv4(),
    name: "Buy milk",
    completed: false,
  },
];

const todoReducer = (state = todoInitialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: uuidv4(),
        name: action.payload,
        completed: false,
      };
      return [...state, newTodo];

    case "DONE_TODO":
      const isCompleted = state.map((todo) =>
        todo.id === action.payload.id
          ? { ...action.payload, completed: !action.payload.completed }
          : todo
      );
      return [...isCompleted];

    case "REMOVE_TODO":
      const removedTodo = state.filter((todo) => todo.id !== action.payload);
      return [...removedTodo];

    case "EDIT_TODO":
      const editedTodo = state.map((todo) =>
        todo.id === action.payload.id
          ? { ...action.payload, name: action.newName }
          : todo
      );
      return [...editedTodo];

    default:
      return state;
  }
};

export default todoReducer;
