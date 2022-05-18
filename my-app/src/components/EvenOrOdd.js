import React from "react";
import { useState } from "react";
export default function EvenOrOdd() {
  const [state, setState] = useState("");
  return (
    <div className="output">
      <label style={{ fontStyle: "italic" }}>
        Чет\Нечет :
        <input
          style={{ marginLeft: "10px" }}
          type={"number"}
          onChange={(e) => {
            if (e.target.value % 2 === 0 && e.target.value / 2 !== 0) {
              setState("Четное");
            } else if (e.target.value % 2 !== 0) {
              setState("Нечетное");
            } else if (!e.target.value) {
              setState("");
            } else setState("Ноль");
          }}
        ></input>
      </label>
      <strong>{state}</strong>
    </div>
  );
}
