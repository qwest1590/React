import React from "react";
import PropTypes from "prop-types";
function AppUserCard({ card }) {
  return (
    <>
      <div className="card">
        <img src={card.avatar} alt="Vasya"></img>
        <div
          className="userName"
          style={{ fontSize: "30px", fontWeight: "bold" }}
        >
          {card.name}
        </div>
        <div
          className="userMail"
          style={{ color: "darkblue", fontStyle: "italic" }}
        >
          {card.email}
        </div>
      </div>
    </>
  );
}

AppUserCard.propTypes = {
  card: PropTypes.objectOf(PropTypes.string),
};
export default AppUserCard;
