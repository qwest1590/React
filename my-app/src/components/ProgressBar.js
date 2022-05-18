import React, { useState } from "react";
export default function ProgressBar() {
  const [width, setWidth] = useState(0);
  if (width > 0 && width < 600) {
    fill();
  }

  function delay(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }
  async function fill() {
    await delay(100).then(() => {
      setWidth(width + 10);
    });
  }
  console.log(width);
  return (
    <div className="container">
      <div className="loadingCont">
        <div className="loading" style={{ width: `${width}px` }}></div>
      </div>
      <button
        className="btn"
        disabled={width > 0 ? true : false}
        onClick={() => {
          if (width < 600) fill();
        }}
      >
        Load
      </button>
      <button
        className="btn"
        disabled={width >= 600 ? false : true}
        onClick={() => {
          setWidth(0);
        }}
      >
        Clear
      </button>
      <p> {width > 0 && width < 600 ? "Loading..." : ""}</p>
    </div>
  );
}
