import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoContainer() {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default TodoContainer;
