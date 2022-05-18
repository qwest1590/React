import React, { useState, useEffect } from "react";
export default function LapsTimer() {
  const [distance, setDistance] = useState();
  const [time, setTime] = useState(0);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (on) {
      let intervalId = setInterval(() => {
        tick();
      }, 100);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [on]);
  function timerStart() {
    setOn(true);
    setDistance(new Date() - time);
  }
  function timerStop() {
    setOn(false);
    setDistance(time);
  }
  function tick() {
    let somedate = new Date() - distance;
    setTime(somedate);
  }
  return (
    <div className="container">
      {" "}
      {time}
      <button className="btn" onClick={timerStart}>
        Start
      </button>
      <button className="btn">Reset</button>
      <button className="btn" onClick={timerStop}>
        Stop
      </button>
      <div className="history">
        {" "}
        History :<button className="btn">Save Time</button>
        <button className="btn">Clear History</button>
      </div>
    </div>
  );
}
