import React, { useState } from "react";

function MouseDetector() {
  const [coords, setCoords] = useState(["Move", "to Start"]);
  function getCoords(event) {
    let x = event.pageX;
    let y = event.pageY;
    setCoords([x, y]);
  }

  return (
    <div
      className="targetToSnipe"
      onMouseMove={getCoords}
      onMouseUpCapture={() => console.log("нажал")}
    >
      {" "}
      <div className="snipeResults">
        {" "}
        X = {coords[0]} {coords[1]} = Y
      </div>
    </div>
  );
}
export default MouseDetector;
