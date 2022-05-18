import React, { useRef } from "react";

const TodoItem = ({
  name,
  id,
  removeTodo,
  checked,
  checkboxChecking,
  editTodo,
  confirmEdit,
}) => {
  const confirmBtn = useRef();
  return (
    <div className={checked ? "todoItem checked" : "todoItem"}>
      <input
        checked={checked}
        type={"checkbox"}
        className="checkbox"
        onChange={() => {
          checkboxChecking(id);
        }}
      ></input>
      <p>{name}</p>
      <button
        className="changing"
        onClick={() => {
          editTodo();
          confirmBtn.current.className = "confirm bordered";
        }}
      ></button>
      <button
        ref={confirmBtn}
        className="confirm"
        onClick={() => {
          confirmEdit(id);
          confirmBtn.current.className = "confirm";
        }}
      >
        Confirm
      </button>
      <button
        className="btn delete"
        onClick={() => {
          removeTodo(id);
        }}
      >
        Delete Todo
      </button>
    </div>
  );
};
export default TodoItem;
