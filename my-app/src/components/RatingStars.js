import React from "react";
import propTypes from "prop-types";
export default function RatingStars(props) {
  const [appName, starsNumber] = props.info;
  let [goldStar, simpleStar] = [<>&#11088;</>, <> &#9734;</>];
  let stars = {
    1: simpleStar,
    2: simpleStar,
    3: simpleStar,
    4: simpleStar,
    5: simpleStar,
  };
  function makeStars() {
    if (starsNumber) {
      for (let i = 1; i <= starsNumber; i++) {
        stars[i] = goldStar;
      }
    }
  }
  return (
    <h1>
      {makeStars(starsNumber)}
      {appName} {stars[1]}
      {stars[2]}
      {stars[3]}
      {stars[4]}
      {stars[5]}
    </h1>
  );
}
RatingStars.propTypes = {
  props: propTypes.array,
};
