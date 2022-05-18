import React from "react";
export default function ToDoItem({
  props: {
    name,
    onClickDelete,
    onCheckBoxChecking,
    checkedBoxes,
    visibleCompleted,
  },
}) {
  function classNameToggler() {
    if (checkedBoxes.has(name) && !visibleCompleted) {
      return "toDoItem done hide";
    } else if (checkedBoxes.has(name) && visibleCompleted)
      return "toDoItem done";
    else return "toDoItem";
  }
  classNameToggler(name, visibleCompleted);
  return (
    <div className={classNameToggler(name)}>
      <input
        checked={checkedBoxes.has(name) ? true : false}
        className="checkBox"
        onChange={() => {
          onCheckBoxChecking(name);
        }}
        type={"checkbox"}
      ></input>
      <div className="dateDiv">{}</div>
      {name}
      <button
        className={
          checkedBoxes.has(name) ? "button delete shining" : "button delete"
        }
        onClick={() => {
          onClickDelete(name);
        }}
      >
        &#10008;
      </button>
    </div>
  );
}
