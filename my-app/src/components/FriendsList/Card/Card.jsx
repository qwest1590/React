import React from "react";
const Card = ({ name, avatar, country, email }) => {
  return (
    <div className="card">
      <img src={avatar} alt="user"></img>
      <article className="name">
        {" "}
        {name} <p className="country">{country}</p>
      </article>
      <p className="mail">{email}</p>
    </div>
  );
};
export default Card;
