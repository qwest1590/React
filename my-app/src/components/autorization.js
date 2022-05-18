import React from "react";
export default function Autorization({
  props: { login, password, email, isRegistred },
}) {
  if (isRegistred) {
    return (
      <div>
        <label>
          Добро пожаловать {login}! <br></br> Введите ваш пароль
          <input
            style={{ marginLeft: "20px" }}
            type={"password"}
            placeholder="Pass "
          ></input>
        </label>
      </div>
    );
  } else {
    return (
      <div className="reg">
        <strong>Пройдите регистрацию!</strong>
        <label>
          <input type={"tel"} placeholder="Введите ваш Телефон"></input>
        </label>
        <label>
          <input type={"password"} placeholder="Придумайте Password"></input>
        </label>
        <label>
          <input type={"email"} placeholder="Ваш Email"></input>
        </label>
      </div>
    );
  }
}
