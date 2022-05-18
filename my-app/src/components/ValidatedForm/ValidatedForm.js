import React, { useRef, useState } from "react";
import Popup from "../Popup/Popup";
const ValidatedForm = ({ validation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({
    login: undefined,
    password: undefined,
  });
  const [error, setError] = useState(false);
  const userLog = useRef();
  const userPass = useRef();

  function validateUserData({ login, password }, validation) {
    if (login.match(validation) && password.match(validation)) {
      setError(false);
      setUserData({ login: login, password: password });
      setIsOpen(true);
    } else setError("This user not Exist");
  }

  return (
    <>
      <div className={isOpen ? "formDiv hidden" : "formDiv"}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let login = userLog.current.value;
            let password = userPass.current.value;
            validateUserData({ login, password }, validation);
          }}
          className="form"
        >
          <label className="label log">
            Login :{" "}
            <input ref={userLog} className="input log" type={"text"}></input>
          </label>
          <label className="label pass">
            Password :
            <input ref={userPass} className="input" type={"text"}></input>
          </label>
          <div className={error ? "infoDiv" : "infoDiv hidden"}>{error}</div>
          <button className="btn">Log in</button>
        </form>
      </div>
      <Popup
        isOpen={isOpen}
        onClickHandler={() => {
          setIsOpen(false);
        }}
        text={"Welcome my Master!"}
        btntext={"Close"}
      />
    </>
  );
};
export default ValidatedForm;
