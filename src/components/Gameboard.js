import React from "react";
import Tile from "./Tile";
import "./Gameboard.css";

const verticalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

export default function Gameboard() {
  const board = horizontalAxis.map(x =>
    verticalAxis.map(y => (
      <Tile key={x + y} x={x} y={y} owner={null} piece={null}></Tile>
    ))
  );

  // const [boardState, setBoardState] = useState(board)

  return <div id="gameboard">{board}</div>;
}
