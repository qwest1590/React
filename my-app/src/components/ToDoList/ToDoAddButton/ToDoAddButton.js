import React from "react";
export default function ToDoAddButton({ props: addToDoItem }) {
  return (
    <button className="button" onClick={addToDoItem}>
      New ToDo
    </button>
  );
}
