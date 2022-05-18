import React, { useState } from "react";
import PropTypes from "prop-types";
function AppLikes(props) {
  const [number, setNumber] = useState(props.count);
  function clearLikes() {
    setNumber(0);
  }
  return (
    <>
      <button
        className="button"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {" "}
        &#10084; {number}
      </button>
      <button className="button clear" onClick={() => clearLikes()}>
        Clear
      </button>
    </>
  );
}
export default AppLikes;
AppLikes.propTypes = {
  count: PropTypes.number,
};
