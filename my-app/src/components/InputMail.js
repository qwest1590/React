import React, { useRef } from "react";
import RatingStars from "./RatingStars";
import ratingStarsRoot from "..";
export default function InputMail() {
  const inputMail = useRef();
  function verifyEmail() {
    const rexEx = /.+@.+\.[ru|com]/;
    if (rexEx.test(inputMail.current.value)) alertWithMail();
    else alert("Введите Email корректно");
  }

  function alertWithMail() {
    alert(`Письмо отправлено на адрес : ${inputMail.current.value}`);
  }
  return (
    <label htmlFor="email">
      {" "}
      Введите email:
      <input
        ref={inputMail}
        type="email"
        placeholder="example123@mail.ru"
        required
      ></input>
      <button
        style={{ marginLeft: "20px" }}
        className="button"
        onClick={verifyEmail}
      >
        Отправить
      </button>
      <button
        className="button"
        onClick={() =>
          ratingStarsRoot.render(
            <RatingStars info={["Changed", inputMail.current.value]} />
          )
        }
      >
        Change Stars
      </button>
    </label>
  );
}
