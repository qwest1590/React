import React, { useRef, useState } from "react";

const Passwords = ({ password, validation, errorMessage }) => {
  const [userPassInput, setUserPassInput] = useState();
  const [userPassConfirm, setUserPassConfirm] = useState();
  const [isFirstTouch, setIsFirstTouch] = useState(false);
  const [isMatch, setIsMatch] = useState();
  function compare(value1, value2) {
    if (value1 === password && value2 === password) {
      setIsMatch(true);
    } else setIsMatch(false);
  }
  return (
    <>
      <label>
        {" "}
        Enter The Password
        <input
          className={
            userPassInput === "invalid" && isFirstTouch === true
              ? "notValidated"
              : null
          }
          type={"password"}
          onBlur={() => {
            setIsFirstTouch(true);
          }}
          onChange={(e) => {
            if (validation(e.target.value)) {
              setUserPassInput(e.target.value);
              compare(e.target.value, userPassConfirm);
            } else setUserPassInput("invalid");
          }}
        ></input>
      </label>
      <br></br>
      <label>
        Confirm The Password
        <input
          type={"password"}
          onChange={(e) => {
            if (validation(e.target.value)) {
              setUserPassConfirm(e.target.value);
              compare(e.target.value, userPassInput);
            } else setUserPassConfirm("invalid");
          }}
        ></input>
      </label>
      {userPassInput === "invalid" && isFirstTouch === true ? (
        <div>{errorMessage}</div>
      ) : null}
      {isMatch ? <div>Passwords are Correct and Match</div> : null}
      {isMatch === false ? <div>Not found</div> : null}
    </>
  );
};
export default Passwords;
