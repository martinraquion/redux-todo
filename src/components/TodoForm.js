import React, { useState } from "react";

function TodoForm() {
  const [newTodo, setNewTodo] = useState("");
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button>Add Todo</button>
    </div>
  );
}

export default TodoForm;
