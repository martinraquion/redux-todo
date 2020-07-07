import React from "react";

function TodoList() {
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "20em",
        marginTop: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 40,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <input type="checkbox" />
          <h4>Initial Todo 1</h4>
        </div>
        <div>
          <button> Edit </button>
          <button> Delete </button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
