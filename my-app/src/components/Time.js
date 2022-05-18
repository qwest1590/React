import React, { useState } from "react";
import { useEffect } from "react";
function ShowTime(props) {
  let [date, setDate] = useState(props.curDate);
  let [toggle, setToggle] = useState(true);
  useEffect(() => {
    if (!toggle) {
      return;
    }
    let intervalId = setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [toggle]);
  return (
    <>
      <div className="date">
        {" "}
        {date}
        <button className="clockStopBtn" onClick={() => setToggle(!toggle)}>
          Start/Stop
        </button>
      </div>
    </>
  );
}
export default ShowTime;
