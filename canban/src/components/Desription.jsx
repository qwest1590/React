import React, { useRef } from "react";
import { Link } from "react-router-dom";
const Description = ({
  task: { name, description, id },
  confirmChangedTask,
}) => {
  const taskDescriptionText = useRef();
  const confirmBtn = useRef();
  return (
    <div className="description">
      <h1>{name}</h1>
      <p ref={taskDescriptionText}>{description}</p>
      <Link className="close-description-link" to={"/"}>
        &#10006;
      </Link>
      <button
        className="description-edit"
        onClick={() => {
          taskDescriptionText.current.contentEditable = "true";
          taskDescriptionText.current.focus();
          confirmBtn.current.style.filter = "drop-shadow(0 0 0.5rem green)";
        }}
      >
        <span>&#9998;</span>
      </button>
      <button
        ref={confirmBtn}
        className="btn add submit "
        onClick={() => {
          taskDescriptionText.current.contentEditable = "false";
          confirmBtn.current.style.filter = "none";
          confirmChangedTask({
            name: name,
            description: taskDescriptionText.current.innerText,
            id: id,
          });
        }}
      >
        Confirm
      </button>
    </div>
  );
};
export default Description;
