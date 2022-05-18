import React, { useRef, useState } from "react";
const Switcher = () => {
  const [state, setState] = useState();
  const outputDiv = useRef();
  const btn1 = useRef();
  // btn1.current.attributes.class.nodeValue = "active";
  const handleClick = (e) => {
    outputDiv.current.innerText = e.target.value;
    e.target.attributes.class.nodeValue = "btn" ? "active btn" : null;
  };

  return (
    <>
      <div className="button-div">
        <button
          className="btn"
          ref={btn1}
          value={"☀"}
          onClick={(e) => handleClick(e)}
        >
          One
        </button>
        <button className="btn" value={"⛈"} onClick={(e) => handleClick(e)}>
          Two
        </button>
        <button className="btn" value={"☁"} onClick={(e) => handleClick(e)}>
          Three
        </button>
        <button className="btn" value={"🌦"} onClick={(e) => handleClick(e)}>
          Four
        </button>
        <button className="btn" value={"🌩"} onClick={(e) => handleClick(e)}>
          Five
        </button>
      </div>
      <div className="output" ref={outputDiv}></div>
    </>
  );
};
export default Switcher;
