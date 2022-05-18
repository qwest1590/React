import React from "react";
import { createPortal } from "react-dom";
const Popup = ({ isOpen, onClickHandler, text, btntext }) => {
  return createPortal(
    <div className={isOpen ? "popup" : "popup hidden"}>
      {text}
      <button className="close" onClick={onClickHandler}>
        {btntext}
      </button>
    </div>,
    document.body
  );
};
export default Popup;
