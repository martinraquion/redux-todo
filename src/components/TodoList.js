import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { doneTodo, removeTodo } from "../redux/actions";
function TodoList() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "20em",
        marginTop: "5px",
      }}
    >
      {todos.map((todo) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 40,
          }}
          key={todo.id}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(doneTodo(todo))}
            />
            <h4>{todo.name}</h4>
          </div>
          <div>
            <button> Edit </button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
