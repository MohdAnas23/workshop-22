import React from "react";

export default function todoItem({ todos, onDelete }) {
  return (
    <div>
      <h1>{todos.disc}</h1>
      <p>{todos.work}</p>
      <button
        className="btn btn-danger "
        onClick={() => {
          onDelete(todos);
        }}
      >
        Delete
      </button>
    </div>
  );
}
