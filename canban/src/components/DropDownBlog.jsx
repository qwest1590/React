import React, { useRef, useState } from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
const DropdownBlog = ({
  data: { title, issues, currentTasks },
  setReadyData,
  setInProgressData,
  setFinishedData,
  onClickLink,
}) => {
  const [dropDownisOpen, setDropDownisOpen] = useState(false);
  const [selectedItem, setSelectedTask] = useState();
  const input = useRef();
  const addButton = useRef();
  const submitButton = useRef();

  const chooseTask = (task) => {
    const subStyle = submitButton.current.style;
    subStyle.zIndex = "1";
    subStyle.top = "-10px";
    subStyle.right = "10px";
    setSelectedTask(task);
  };

  const onSubmitChoosedTask = () => {
    submitButton.current.style.zIndex = "-1";
    setDropDownisOpen(false);
    const arrWithRemove = [...issues];
    const index = issues.indexOf(selectedItem);
    arrWithRemove.splice(index, 1);
    switch (title) {
      case "Ready":
        setReadyData((prevState) => ({
          ...prevState,
          issues: arrWithRemove,
          currentTasks: [...currentTasks, selectedItem],
        }));
        break;
      case "In Progress":
        setInProgressData((prevState) => ({
          ...prevState,
          issues: arrWithRemove,
          currentTasks: [...currentTasks, selectedItem],
        }));
        setReadyData((prevState) => ({
          ...prevState,
          currentTasks: arrWithRemove,
        }));
        setFinishedData((prevState) => ({
          ...prevState,
          issues: currentTasks,
        }));
        break;
      case "Finished":
        setFinishedData((prevState) => ({
          ...prevState,
          issues: arrWithRemove,
          currentTasks: [...currentTasks, selectedItem],
        }));
        break;
      default:
        break;
    }
  };

  const onClickDropDown = () => {
    setDropDownisOpen(true);
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
        onClick={onClickDropDown}
        ref={addButton}
        className={
          issues.length > 0 && currentTasks.length < 8
            ? "add btn active"
            : "add btn"
        }
      >
        {" "}
        <div> &#10006; &nbsp;</div> Add card
      </button>

      <button
        onClick={onSubmitChoosedTask}
        ref={submitButton}
        className="add btn submit"
      >
        Submit
      </button>
      <Dropdown
        chooseTask={chooseTask}
        isOpen={dropDownisOpen}
        tasks={issues}
      />
    </div>
  );
};
export default DropdownBlog;
