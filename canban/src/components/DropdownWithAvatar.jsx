import React, { useState } from "react";
import defaultAva from "../images/user-avatar.jpg";
import arrow from "../images/arrow-down.png";
const DropdownWithAvatar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropdown-container">
      <img
        className="avatar"
        src={defaultAva}
        alt=""
        onClick={() => setIsOpen(!isOpen)}
      ></img>
      <div>
        {isOpen ? (
          <div className="login-dropdown">
            <div className="square"></div>
            <option className="dropdown-item-options">Profile</option>
            <option
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              className="dropdown-item-options"
            >
              Log Out
            </option>
          </div>
        ) : null}
      </div>
      <img
        className={isOpen ? "arrow rotated" : "arrow"}
        src={arrow}
        alt=""
      ></img>
    </div>
  );
};
export default DropdownWithAvatar;
