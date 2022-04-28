import React, { useContext } from "react";
import Tile from "./Tile";
import "./Gameboard.css";

const verticalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const horizontalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const isSubset = (a, b) => {
  let a1 = [...a];
  if (a.length > b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      a1 = a1.filter(subsetNum => subsetNum !== a[i]);
    }
  }
  return a1.length === 0;
};

export default function Gameboard({ dice }) {
  const board = horizontalAxis.map(x =>
    verticalAxis.map(y => (
      <Tile key={x + y} x={x} y={y} owner={null} piece={null}></Tile>
    ))
  );

  const readValue = console.log(dice);

  // const [boardState, setBoardState] = useState(board)

  return (
    <div className="gameboard">
      {board}
      {readValue}
    </div>
  );
}
