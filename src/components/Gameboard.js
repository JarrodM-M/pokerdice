import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import "./Gameboard.css";
import "../App.css";

const verticalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const horizontalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const numberArray = horizontalAxis.map(i =>
  verticalAxis.map(j => ({ x: i, y: j, owner: null }))
);

export default function Gameboard({
  dice,
  playerState,
  setPlayerState,
  handleSelection,
  setRollCount,
  dispatch
}) {
  console.log(numberArray);
  const [boardState, setBoardState] = useState(numberArray);
  const resetAll = () => dispatch({ type: "resetAll" });
  const setOwner = (x, y) => {
    resetAll();
    setRollCount(0);
    if (playerState === "red") {
      setPlayerState("blue");
    } else {
      setPlayerState("red");
    }
    console.log(x, y, playerState);
  };

  return (
    <div className="board-grid">
      {boardState.map(row =>
        row.map(({ x, y, owner }) => (
          <Tile
            key={x + y}
            x={x}
            y={y}
            owner={owner}
            setOwner={() => setOwner(x, y)}
            dice={dice}
            playerState={playerState}
            setPlayerState={setPlayerState}
            handleSelection={handleSelection}
            dispatch={dispatch}
            setRollCount={setRollCount}
          ></Tile>
        ))
      )}
    </div>
  );
}
