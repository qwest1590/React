import { node } from "prop-types";
import React, { useEffect, useRef, useState } from "react";
const withDraggable = (Component) => {
  return function ({
    color,
    id,
    makeOtherNonClickable,
    clickable,
    makeOthersClickableAgain,
  }) {
    const [coords, setCoords] = useState();
    const [mouseOver, setMouseOver] = useState(false);
    const div = useRef();
    const onMousemMoveHandler = (e) => {
      if (mouseOver) {
        setCoords({ x: e.clientX, y: e.clientY });
      }
    };
    return (
      <div
        onClick={() => {}}
        ref={div}
        onMouseUp={(e) => {
          setMouseOver(false);
          e.target.removeEventListener("mousemove", onMousemMoveHandler);
          makeOthersClickableAgain();
        }}
        onMouseMove={onMousemMoveHandler}
        onMouseDown={() => {
          setMouseOver(true);
          makeOtherNonClickable(id);
        }}
      >
        {" "}
        <Component
          color={color}
          coords={coords}
          id={id}
          clickable={clickable}
        />
      </div>
    );
  };
};

export default withDraggable;
