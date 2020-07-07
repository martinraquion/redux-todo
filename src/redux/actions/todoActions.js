export const addTodo = (newTodo) => {
  return {
    type: `ADD_TODO`,
    payload: newTodo,
  };
};

export const doneTodo = (todo) => {
  return {
    type: "DONE_TODO",
    payload: todo,
  };
};

export const removeTodo = (id) => {
  return {
    type: "REMOVE_TODO",
    payload: id,
  };
};
