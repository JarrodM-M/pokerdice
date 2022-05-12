import React from "react";
import Tile from "./Tile";
import "./Gameboard.css";

const verticalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const horizontalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const isSubset = (a, b) => {
  if (a.length > b.length) return false;
  let i = a.length;
  while (i--) {
    if (b.includes(a[i])) {
      b.splice(b.indexOf(a[i]), 1);
      a.splice(i, 1);
    }
  }
  return a.length === 0;
};

export default function Gameboard({ dice }) {
  const board = horizontalAxis.map(x =>
    verticalAxis.map(y => (
      <Tile
        key={x + y}
        x={x}
        y={y}
        owner={null}
        piece={null}
        dice={dice}
      ></Tile>
    ))
  );

  const readValue = console.log(isSubset([2, 2], dice));

  // const [boardState, setBoardState] = useState(board)

  return (
    <div className="gameboard">
      {board}
      {readValue}
    </div>
  );
}
