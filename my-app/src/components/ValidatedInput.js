import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";
const ValidatedInput = ({ errorMessage, validation, placeholder }) => {
  const [isvalidated, setIsvalidated] = useState({
    firstTouch: false,
    val: true,
  });
  const theme = useContext(ThemeContext);
  function validate(value) {
    setIsvalidated({ ...isvalidated, val: validation(value) });
  }
  return (
    <div style={{ background: theme.background }}>
      <label>
        Введите чтото:
        <input
          className={
            !isvalidated.firstTouch || isvalidated.val ? "" : "notValidated"
          }
          onBlur={() => setIsvalidated({ ...isvalidated, firstTouch: true })}
          onChange={(e) => validate(e.target.value)}
          placeholder={placeholder}
          type={"text"}
        ></input>
      </label>
      <span>
        {" "}
        {!isvalidated.firstTouch || isvalidated.val ? null : errorMessage}
      </span>
    </div>
  );
};
export default ValidatedInput;
