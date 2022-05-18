import React, { useRef, useState } from "react";

const TicTac = () => {
  const X = 1;
  const O = 2;
  const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [XorO, setXOrO] = useState(X);
  const [wins, setWind] = useState({ Xwins: 0, Owins: 0 });

  const Cross = () => {
    return (
      <svg
        pointerEvents="none"
        fill="#000000"
        width="120px"
        height="120px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1100 1100"
      >
        <path d="M980.528 205.539L874.462 99.473 540 433.935 205.539 99.473 99.473 205.539 433.935 540 99.473 874.462l106.066 106.065L540 646.066l334.462 334.461 106.065-106.065L646.066 540z" />
      </svg>
    );
  };
  const Circle = () => {
    return (
      <svg
        pointerEvents="none"
        className="svg"
        fill="#FF0000"
        width="120px"
        height="120px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <path
          fill="none"
          d="M50.001 22.097c-15.385 0-27.904 12.518-27.904 27.904s12.518 27.903 27.904 27.903 27.903-12.517 27.903-27.903-12.518-27.904-27.903-27.904z"
        />
        <path d="M50.001 5C25.186 5 5 25.186 5 50.001 5 74.815 25.186 95 50.001 95 74.815 95 95 74.815 95 50.001 95 25.186 74.815 5 50.001 5zm0 72.904c-15.385 0-27.904-12.517-27.904-27.903s12.518-27.904 27.904-27.904 27.903 12.518 27.903 27.904-12.518 27.903-27.903 27.903z" />
      </svg>
    );
  };
  function onChangeHandler(e) {
    let index = +e.target.className.slice(10) - 1;
    const mapped = [...board];
    mapped[index] = XorO;
    XorO === X ? setXOrO(O) : setXOrO(X);
    setBoard(mapped);
    e.target.removeEventListener("click", onChangeHandler);
  }
  function draw(value) {
    if (value === 0) {
      return null;
    } else if (value === 1) {
      return <Cross />;
    } else if (value === 2) return <Circle />;
  }
  function turnOnListener(value) {
    if (value === 0) {
      return true;
    } else return false;
  }

  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const winConditions = function () {
    for (const [a, b, c] of winCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        if (board[a] === 1) {
          resetTheBoard(1000);
          return <p>Выиграли Крестики</p>;
        } else resetTheBoard(1000);
        return <p>Выиграли Нолики</p>;
      }
    }
  };
  function drawCondition() {
    const mappeds = [...board];
    return mappeds.every((e) => e > 0);
  }
  function resetTheBoard(time) {
    setTimeout(() => {
      setBoard(new Array(9).fill(0));
      setXOrO(X);
    }, time);
  }
  return (
    <>
      <h1>
        Крестики - Нолики {winConditions()} <br></br>
        {drawCondition() ? "Ничья" : null}{" "}
      </h1>
      <div className="board">
        <div
          className="boardItem 1"
          onClick={turnOnListener(board[0]) ? onChangeHandler : undefined}
        >
          {draw(board[0])}
        </div>
        <div
          className="boardItem 2"
          onClick={turnOnListener(board[1]) ? onChangeHandler : undefined}
        >
          {" "}
          {draw(board[1])}
        </div>
        <div
          className="boardItem 3"
          onClick={turnOnListener(board[2]) ? onChangeHandler : undefined}
        >
          {" "}
          {draw(board[2])}
        </div>
        <div
          className="boardItem 4"
          onClick={turnOnListener(board[3]) ? onChangeHandler : undefined}
        >
          {" "}
          {draw(board[3])}
        </div>
        <div
          className="boardItem 5"
          onClick={turnOnListener(board[4]) ? onChangeHandler : undefined}
        >
          {" "}
          {draw(board[4])}
        </div>
        <div
          className="boardItem 6"
          onClick={turnOnListener(board[5]) ? onChangeHandler : undefined}
        >
          {" "}
          {draw(board[5])}
        </div>
        <div
          className="boardItem 7"
          onClick={turnOnListener(board[6]) ? onChangeHandler : undefined}
        >
          {" "}
          {draw(board[6])}
        </div>
        <div
          className="boardItem 8"
          onClick={turnOnListener(board[7]) ? onChangeHandler : undefined}
        >
          {" "}
          {draw(board[7])}
        </div>
        <div
          className="boardItem 9"
          onClick={turnOnListener(board[8]) ? onChangeHandler : undefined}
        >
          {" "}
          {draw(board[8])}
        </div>
      </div>
      <div>
        {" "}
        <button
          className="button"
          onClick={() => {
            resetTheBoard(0);
          }}
        >
          Новая игра
        </button>
      </div>
    </>
  );
};
export default TicTac;
