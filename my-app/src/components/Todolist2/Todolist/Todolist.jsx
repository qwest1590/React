import React, { useRef, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
const TodoList = () => {
  const userInput = useRef();
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (userInput.current.value === "") {
      return;
    }
    setTodos([
      ...todos,
      { name: userInput.current.value, checked: false, visible: true },
    ]);
    userInput.current.value = "";
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  };

  const checkboxChecking = (id) => {
    const newTodos = [...todos];
    const index = newTodos[id];
    if (index.checked) {
      index.checked = false;
      index.visible = true;
    } else {
      index.checked = true;
      index.visible = false;
    }
    setTodos(newTodos);
  };

  const showCompleted = () => {
    const newTodos = [...todos];
    newTodos.forEach((item) => {
      item.visible = true;
    });
    setTodos(newTodos);
  };

  const editTodo = () => {
    userInput.current.focus();
  };

  const confirmEdit = (id) => {
    const newTodos = [...todos];
    const index = newTodos[id];
    if (userInput.current.value !== "") {
      index.name = userInput.current.value;
      setTodos(newTodos);
      userInput.current.value = "";
    }
  };
  return (
    <>
      <h1 className="curTasks">Current Tasks : {todos.length}</h1>
      <form
        className="todolist"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          <input type={"text"} ref={userInput}></input>
        </label>
        <button className="btn addTodo" onClick={addTodo}>
          Add Todo
        </button>
        <button className="btn showHide" onClick={showCompleted}>
          Show Completed
        </button>
      </form>
      <ul>
        {" "}
        {todos.map((item) => (
          <li key={Math.random()} className={item.visible ? null : "hidden"}>
            <TodoItem
              name={item.name}
              id={todos.indexOf(item)}
              removeTodo={removeTodo}
              checked={item.checked}
              checkboxChecking={checkboxChecking}
              editTodo={editTodo}
              confirmEdit={confirmEdit}
            />
          </li>
        ))}{" "}
      </ul>
      )
    </>
  );
};
export default TodoList;
