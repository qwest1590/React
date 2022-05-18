import React, { useState } from "react";
export default function FilteredList({ props: fruits }) {
  const [input, setInput] = useState("s");
  const regExp = new RegExp("^" + input);
  let result = [];
  checkWhatToShow();
  function showMatches(e) {
    setInput(e.target.value);
  }
  function checkWhatToShow() {
    fruits.forEach((item) => {
      if (item.match(regExp)) {
        result.push(item);
      }
    });
  }

  return (
    <div>
      <input type={"text"} placeholder="fruit" onChange={showMatches}></input>;
      <ul>
        {result.map((fruit) => (
          <li key={fruit}>{fruit} </li>
        ))}
        {result.length === 0 ? "No Matches Found" : ""}
      </ul>
    </div>
  );
}
