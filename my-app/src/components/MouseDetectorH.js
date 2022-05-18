import React, { useState } from "react";
export default function MouseDetectorH() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  return (
    <div
      style={{ backgroundColor: "aqua", width: "300px", height: "300px" }}
      onMouseMove={(e) => {
        setCoords({ x: e.clientX, y: e.clientY });
      }}
    >
      {" "}
      X = {coords.x} Y = {coords.y}
    </div>
  );
}
