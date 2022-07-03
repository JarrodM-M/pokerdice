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
  const [owner, setOwner] = useState(null);
  const board = horizontalAxis.map(x =>
    verticalAxis.map(y => (
      <Tile
        key={x + y}
        x={x}
        y={y}
        owner={owner}
        setOwner={setOwner}
        dice={dice}
        playerState={playerState}
        setPlayerState={setPlayerState}
        handleSelection={handleSelection}
        dispatch={dispatch}
        setRollCount={setRollCount}
      ></Tile>
    ))
  );
  const [boardState, setBoardState] = useState(board);
  useEffect(() => {}, [boardState]);
  console.log(board);

  return <div className="board-grid">{board}</div>;
}
