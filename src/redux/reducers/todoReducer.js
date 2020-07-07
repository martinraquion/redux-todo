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
      return state;
    default:
      return state;
  }
};

export default todoReducer;
