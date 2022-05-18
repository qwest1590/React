import React, { useState } from "react";
const Converter = () => {
  const [duim, setDuim] = useState("");
  const [santi, setSanti] = useState("");
  function roundIfNeeded(value) {
    return Math.round(value * 100) / 100;
  }
  function onChangeDuim(e) {
    setDuim(e.target.value);
    setSanti(roundIfNeeded(e.target.value * 2.54));
  }

  function onChangeSanti(e) {
    setDuim(roundIfNeeded(e.target.value / 2.54));
    setSanti(e.target.value);
  }
  return (
    <div>
      <label>
        {" "}
        Дюймы : <input onChange={onChangeDuim} value={duim}></input>
      </label>

      <label>
        Сантиметры: <input onChange={onChangeSanti} value={santi}></input>
      </label>
    </div>
  );
};
export default Converter;
