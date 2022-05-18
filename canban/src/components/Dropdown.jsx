import React, { useEffect, useRef, useState } from "react";
const Dropdown = ({ tasks, isOpen, chooseTask }) => {
  const [listOpen, setListOpen] = useState(false);
  const labelDropdown = useRef();
  const defaultChooseText = "Choose the Task";

  useEffect(() => {
    labelDropdown.current.children[0].innerText = defaultChooseText;
  }, [tasks]);

  const showHideDropdownList = () => {
    setListOpen(!listOpen);
  };

  return (
    <div className={!isOpen ? "hidden" : null}>
      <div
        ref={labelDropdown}
        className="label-dropdown"
        onClick={showHideDropdownList}
      >
        <p>
          {" "}
          <span></span>
        </p>
        <div className="arrow-down">&#10148;</div>{" "}
      </div>
      <div className={!listOpen ? "hidden" : null}>
        <ul className="tasks-list">
          {tasks.map((item) => (
            <li
              onClick={(e) => {
                labelDropdown.current.children[0].innerText =
                  e.target.innerText;
                setListOpen(false);
                chooseTask(item);
              }}
              className="tasks-item"
              key={item.id}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Dropdown;
