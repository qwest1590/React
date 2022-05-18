import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Backlog = ({
  data: { title, issues, currentTasks },
  setBacklogData,
  onClickLink,
}) => {
  const [taskId, setTaskId] = useState(1);
  const input = useRef();
  const addButton = useRef();
  const submitButton = useRef();

  useEffect(() => {
    const lastId = +localStorage.getItem("lastId");
    if (lastId !== null) {
      setTaskId(lastId + 1);
    }
  }, []);

  const onClickHandler = () => {
    input.current.className = "task input";
    input.current.focus();
    addButton.current.style.zIndex = "-1";
    submitButton.current.style.zIndex = "1";
  };

  const onSubmitHandler = () => {
    if (input.current.value !== "") {
      backlogAddTask();
    }
    input.current.blur();
    input.current.className = "task input hidden";
    input.current.value = "";
    submitButton.current.style.zIndex = "-1";
    addButton.current.style.zIndex = "1";
  };

  const backlogAddTask = () => {
    const issuesCopy = [...issues];
    const newTask = {
      description: "This Task has no description",
      name: input.current.value,
      id: taskId,
    };
    issuesCopy.push(newTask);
    setBacklogData({
      title: "Backlog",
      issues: issuesCopy,
      currentTasks: issuesCopy,
    });
    setTaskId((id) => id + 1);
    localStorage.setItem("lastId", `${taskId}`);
  };

  return (
    <div className="task-container">
      <span className="blog-name">{title}</span>
      <ul className="task-list">
        {currentTasks.map((item) => (
          <li className="task" key={item.id}>
            <Link onClick={() => onClickLink(item, title)} to={`/${item.id}`}>
              {" "}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler();
        }}
      >
        <input
          ref={input}
          type={"text"}
          className="task input hidden"
          placeholder="_________________________________"
        ></input>
      </form>
      <button
        onClick={onClickHandler}
        ref={addButton}
        className={currentTasks.length < 8 ? "add btn active" : "add btn"}
      >
        {" "}
        <div> &#10006; &nbsp;</div> Add card
      </button>

      <button
        onClick={onSubmitHandler}
        ref={submitButton}
        className="add btn submit"
      >
        Submit
      </button>
    </div>
  );
};
export default Backlog;
