import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import "./Gameboard.css";
import "../App.css";

const verticalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const horizontalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const numberArray = horizontalAxis.map(i =>
  verticalAxis.map(j => ({ x: i, y: j, owner: null, winOn: null }))
);

const winTest = (
  board,
  winningArray,
  winningColor,
  winningEl,
  winningOp,
  inARow,
  lastO
) => {
  let lastEl = null;
  board.some(element => {
    element.some(subElement => {
      if (
        subElement.owner !== null &&
        lastO === subElement.owner &&
        subElement.y - lastEl == 1
      ) {
        inARow += 1;
        winningArray.push(subElement.y);
        winningColor = subElement.owner;
        winningEl = subElement.x;
        winningOp = winningArray[0] - 1;
      } else {
        inARow = 1;
        winningArray.splice(0, winningArray.length);
      }
      lastO = subElement.owner;
      lastEl = subElement.y;
      return inARow >= 5;
    });
    return inARow >= 5;
  });
};

///append the winOn inton the test sets

export default function Gameboard({
  dice,
  playerState,
  setPlayerState,
  setRollCount,
  dispatch
}) {
  const [boardState, setBoardState] = useState(numberArray);
  const [winState, setWinState] = useState(numberArray);
  const resetAll = () => dispatch({ type: "resetAll" });
  const setOwner = (x, y) => {
    resetAll();
    setRollCount(0);
    if (playerState === "red") {
      setPlayerState("blue");
    } else {
      setPlayerState("red");
    }
    boardState[x][y].owner = playerState;
    setBoardState([...boardState]);
    winState[x][y].owner = playerState;
    setWinState([...winState]);
  };

  const setWinOne = (x, y, direction) => {
    boardState[x][y].winOn = direction;
    setBoardState([...boardState]);
    winState[x][y].winOn = playerState;
    setWinState([...winState]);
  };

  return (
    <div className="board-grid">
      {boardState.map(row =>
        row.map(({ x, y, owner, winOn }) => (
          <Tile
            key={x + y}
            x={x}
            y={y}
            owner={owner}
            winOn={winOn}
            setOwner={() => setOwner(x, y)}
            dice={dice}
          ></Tile>
        ))
      )}
    </div>
  );
}
