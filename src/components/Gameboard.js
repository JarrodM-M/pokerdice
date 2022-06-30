import React, { useState } from "react";
import Tile from "./Tile";
import "./Gameboard.css";
import "../App.css";

const verticalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const horizontalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

export default function Gameboard({
  dice,
  playerState,
  setPlayerState,
  handleSelection,
  setRollCount,
  dispatch
}) {
  const board = horizontalAxis.map(x =>
    verticalAxis.map(y => (
      <Tile
        key={x + y}
        x={x}
        y={y}
        owner={null}
        piece={null}
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

  return <div className="board-grid">{board}</div>;
}
