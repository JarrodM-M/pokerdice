import React, { useContext } from "react";
import Tile from "./Tile";
import "./Gameboard.css";
import { DiceValueContext } from "../App";

const verticalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

export default function Gameboard() {
  const { value } = useContext(DiceValueContext);
  const board = horizontalAxis.map(x =>
    verticalAxis.map(y => (
      <Tile key={x + y} x={x} y={y} owner={null} piece={null}></Tile>
    ))
  );

  const readValue = console.log(value);

  // const [boardState, setBoardState] = useState(board)

  return (
    <div className="gameboard">
      {board}
      {readValue}
    </div>
  );
}
