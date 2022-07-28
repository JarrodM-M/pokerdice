import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import "./Gameboard.css";
import "../App.css";

const verticalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const horizontalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const numberArray = horizontalAxis.map(i =>
  verticalAxis.map(j => ({ x: i, y: j, owner: null }))
);


const testBoard = [
  [
      {
          "x": "0",
          "y": "0",
          "owner": 'red'
      },
      {
          "x": "0",
          "y": "1",
          "owner": 'red'
      },
      {
          "x": "0",
          "y": "2",
          "owner": 'red'
      },
      {
          "x": "0",
          "y": "3",
          "owner": 'red'
      },
      {
          "x": "0",
          "y": "4",
          "owner": 'red'
      },
      {
          "x": "0",
          "y": "5",
          "owner": null
      },
      {
          "x": "0",
          "y": "6",
          "owner": null
      },
      {
          "x": "0",
          "y": "7",
          "owner": null
      },
      {
          "x": "0",
          "y": "8",
          "owner": null
      }
  ],
  [
      {
          "x": "1",
          "y": "0",
          "owner": null
      },
      {
          "x": "1",
          "y": "1",
          "owner": null
      },
      {
          "x": "1",
          "y": "2",
          "owner": null
      },
      {
          "x": "1",
          "y": "3",
          "owner": null
      },
      {
          "x": "1",
          "y": "4",
          "owner": null
      },
      {
          "x": "1",
          "y": "5",
          "owner": null
      },
      {
          "x": "1",
          "y": "6",
          "owner": null
      },
      {
          "x": "1",
          "y": "7",
          "owner": null
      },
      {
          "x": "1",
          "y": "8",
          "owner": null
      }
  ],
  [
      {
          "x": "2",
          "y": "0",
          "owner": null
      },
      {
          "x": "2",
          "y": "1",
          "owner": null
      },
      {
          "x": "2",
          "y": "2",
          "owner": null
      },
      {
          "x": "2",
          "y": "3",
          "owner": null
      },
      {
          "x": "2",
          "y": "4",
          "owner": null
      },
      {
          "x": "2",
          "y": "5",
          "owner": null
      },
      {
          "x": "2",
          "y": "6",
          "owner": null
      },
      {
          "x": "2",
          "y": "7",
          "owner": null
      },
      {
          "x": "2",
          "y": "8",
          "owner": null
      }
  ],
  [
      {
          "x": "3",
          "y": "0",
          "owner": null
      },
      {
          "x": "3",
          "y": "1",
          "owner": null
      },
      {
          "x": "3",
          "y": "2",
          "owner": null
      },
      {
          "x": "3",
          "y": "3",
          "owner": null
      },
      {
          "x": "3",
          "y": "4",
          "owner": null
      },
      {
          "x": "3",
          "y": "5",
          "owner": null
      },
      {
          "x": "3",
          "y": "6",
          "owner": null
      },
      {
          "x": "3",
          "y": "7",
          "owner": null
      },
      {
          "x": "3",
          "y": "8",
          "owner": null
      }
  ],
  [
      {
          "x": "4",
          "y": "0",
          "owner": null
      },
      {
          "x": "4",
          "y": "1",
          "owner": null
      },
      {
          "x": "4",
          "y": "2",
          "owner": null
      },
      {
          "x": "4",
          "y": "3",
          "owner": null
      },
      {
          "x": "4",
          "y": "4",
          "owner": null
      },
      {
          "x": "4",
          "y": "5",
          "owner": null
      },
      {
          "x": "4",
          "y": "6",
          "owner": null
      },
      {
          "x": "4",
          "y": "7",
          "owner": null
      },
      {
          "x": "4",
          "y": "8",
          "owner": null
      }
  ],
  [
      {
          "x": "5",
          "y": "0",
          "owner": null
      },
      {
          "x": "5",
          "y": "1",
          "owner": null
      },
      {
          "x": "5",
          "y": "2",
          "owner": null
      },
      {
          "x": "5",
          "y": "3",
          "owner": null
      },
      {
          "x": "5",
          "y": "4",
          "owner": null
      },
      {
          "x": "5",
          "y": "5",
          "owner": null
      },
      {
          "x": "5",
          "y": "6",
          "owner": null
      },
      {
          "x": "5",
          "y": "7",
          "owner": null
      },
      {
          "x": "5",
          "y": "8",
          "owner": null
      }
  ],
  [
      {
          "x": "6",
          "y": "0",
          "owner": null
      },
      {
          "x": "6",
          "y": "1",
          "owner": null
      },
      {
          "x": "6",
          "y": "2",
          "owner": null
      },
      {
          "x": "6",
          "y": "3",
          "owner": null
      },
      {
          "x": "6",
          "y": "4",
          "owner": null
      },
      {
          "x": "6",
          "y": "5",
          "owner": null
      },
      {
          "x": "6",
          "y": "6",
          "owner": null
      },
      {
          "x": "6",
          "y": "7",
          "owner": null
      },
      {
          "x": "6",
          "y": "8",
          "owner": null
      }
  ],
  [
      {
          "x": "7",
          "y": "0",
          "owner": null
      },
      {
          "x": "7",
          "y": "1",
          "owner": null
      },
      {
          "x": "7",
          "y": "2",
          "owner": null
      },
      {
          "x": "7",
          "y": "3",
          "owner": null
      },
      {
          "x": "7",
          "y": "4",
          "owner": null
      },
      {
          "x": "7",
          "y": "5",
          "owner": null
      },
      {
          "x": "7",
          "y": "6",
          "owner": null
      },
      {
          "x": "7",
          "y": "7",
          "owner": null
      },
      {
          "x": "7",
          "y": "8",
          "owner": null
      }
  ],
  [
      {
          "x": "8",
          "y": "0",
          "owner": null
      },
      {
          "x": "8",
          "y": "1",
          "owner": null
      },
      {
          "x": "8",
          "y": "2",
          "owner": null
      },
      {
          "x": "8",
          "y": "3",
          "owner": null
      },
      {
          "x": "8",
          "y": "4",
          "owner": null
      },
      {
          "x": "8",
          "y": "5",
          "owner": null
      },
      {
          "x": "8",
          "y": "6",
          "owner": null
      },
      {
          "x": "8",
          "y": "7",
          "owner": null
      },
      {
          "x": "8",
          "y": "8",
          "owner": null
      }
  ]
]


export default function Gameboard({
  dice,
  playerState,
  setPlayerState,
  setRollCount,
  dispatch
}) {
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
    boardState[x][y].owner = playerState;
    setBoardState([...boardState]);
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
          ></Tile>
        ))
      )}
       {console.log(testBoard[0])}
      {testBoard[0].forEach(element => {if(element.owner == 'red'){if ([element.y] = [0,1,2,3,4]){testBoard[0].splice(0,1); console.log(testBoard)} }})}
        
    </div>
  );
}
