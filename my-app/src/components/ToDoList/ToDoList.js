import React from "react";
import { useState } from "react";
import ToDoAddButton from "./ToDoAddButton/ToDoAddButton";
import "./style.css";
import ToDoItem from "./ToDoItem/ToDoItem";
import ToDoShowCompleteButton from "./ToDoShowCompleteButton/ToDoShowCompleteButton";

export default function ToDoList() {
  const [state, setState] = useState({
    checkedNow: new Set(),
    userinput: "",
    toDoItemsCount: 0,
    items: [],
    visibleCompleted: false,
  });
  function onChangeInput(e) {
    setState({ ...state, userinput: e.target.value });
  }
  function clearInputValue() {
    document.querySelector(".input").value = "";
  }
  function addToDoItem() {
    if (state.userinput !== "") {
      setState({
        ...state,
        userinput: "",
        toDoItemsCount: state.toDoItemsCount + 1,
        items: [...state.items, state.userinput],
      });
      clearInputValue();
    }
  }
  function onClickDelete(name) {
    const index = state.items.indexOf(name);
    const mapped = state.items.map((item) => item);
    mapped.splice(index, 1);
    setState({
      ...state,
      toDoItemsCount: state.toDoItemsCount - 1,
      items: mapped,
    });
  }
  function onCheckBoxChecking(name) {
    if (state.checkedNow.has(name)) {
      let mySet = state.checkedNow;
      mySet.delete(name);
      setState({
        ...state,
        checkedNow: mySet,
      });
    } else
      setState({
        ...state,
        checkedNow: state.checkedNow.add(name),
      });
  }
  function onClickShowCompleted() {
    let completedArr = Array.from(state.checkedNow);

    console.log(completedArr);
    setState({
      ...state,
      visibleCompleted: !state.visibleCompleted,
    });
  }

  console.log(state);
  return (
    <div className="mainDiv">
      <h1>Current Tasks : {state.toDoItemsCount}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type={"text"} className="input" onChange={onChangeInput}></input>
        <ToDoAddButton props={addToDoItem}></ToDoAddButton>
        <ToDoShowCompleteButton props={onClickShowCompleted} />
      </form>
      <ul>
        {state.items.map((name) => (
          <li key={name + Math.random()}>
            {" "}
            <ToDoItem
              props={{
                name: name,
                onClickDelete: onClickDelete,
                onCheckBoxChecking: onCheckBoxChecking,
                checkedBoxes: state.checkedNow,
                visibleCompleted: state.visibleCompleted,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
