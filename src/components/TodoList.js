import React from "react";
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todo);
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
            <input type="checkbox" checked={todo.completed} />
            <h4>{todo.name}</h4>
          </div>
          <div>
            <button> Edit </button>
            <button> Delete </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
