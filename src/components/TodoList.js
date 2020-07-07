import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doneTodo, removeTodo, editTodo } from "../redux/actions";
function TodoList() {
  const [editToggle, setEditToggle] = useState(false);
  const [editName, setEditName] = useState("");
  const [selectedId, setSelectedId] = useState({});
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleEditToggle = (todo) => {
    setEditToggle(!editToggle);
    setSelectedId(todo);
  };
  const handleEdit = (e, todo) => {
    e.preventDefault();
    dispatch(editTodo(todo, editName));
    setEditToggle(false);
  };
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "20em",
        marginTop: "5px",
      }}
    >
      {todos.map((todo) => (
        <div key={todo.id}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 40,
            }}
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
              <button onClick={() => handleEditToggle(todo.id)}>Edit</button>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                Delete
              </button>
            </div>
          </div>
          {editToggle && selectedId === todo.id && (
            <form onSubmit={(e) => handleEdit(e, todo)}>
              <input
                type="text"
                onChange={(e) => setEditName(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
