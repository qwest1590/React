import React, { useEffect, useState } from "react";
export default function BirthdayCountdown({ birthday }) {
  const [time, setTime] = useState({});

  function getCountDownValue() {
    const currentDate = Date.now();
    const countdown = birthday - currentDate;
    setTime({
      milliseconds: countdown,
      seconds: new Date(Math.floor(countdown)).getSeconds(),
      minutes: new Date(Math.floor(countdown)).getMinutes(),
      hours: new Date(Math.floor(countdown)).getHours() - 3,
      days: Math.floor(countdown / 1000 / 60 / 60 / 24),
    });
  }
  useEffect(() => {
    setTimeout(() => {
      getCountDownValue();
    }, 1000);
  }, [time.milliseconds]);
  return (
    <div className="birthDay">
      <h1>To My BirthDay</h1>
      <span>
        {" "}
        Дни: <br></br>
        {time.days}
      </span>{" "}
      <span>
        Часы: <br></br>
        {time.hours}
      </span>{" "}
      <span>
        Минуты: <br></br>
        {time.minutes}{" "}
      </span>{" "}
      <span>
        Секунды: <br></br>
        {time.seconds}{" "}
      </span>
    </div>
  );
}
