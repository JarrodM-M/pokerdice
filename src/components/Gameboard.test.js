import React, { useState } from "react";
import ReactDOM from "react-dom";
import Gameboard from "./Gameboard";
import { boardState } from "./Gameboard";

const verticalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const horizontalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const numberArray = horizontalAxis.map(i =>
  verticalAxis.map(j => ({ x: i, y: j, owner: null }))
);

const tableX = numberArray;
const tableY = numberArray;
const tableD = numberArray;
const tableF = numberArray;

const testBoardX = [
  [
    {
      x: "0",
      y: "0",
      owner: null
    },
    {
      x: "0",
      y: "1",
      owner: null
    },
    {
      x: "0",
      y: "2",
      owner: "red"
    },
    {
      x: "0",
      y: "3",
      owner: "blue"
    },
    {
      x: "0",
      y: "4",
      owner: "red"
    },
    {
      x: "0",
      y: "5",
      owner: "blue"
    },
    {
      x: "0",
      y: "6",
      owner: "blue"
    },
    {
      x: "0",
      y: "7",
      owner: "red"
    },
    {
      x: "0",
      y: "8",
      owner: null
    }
  ],
  [
    {
      x: "1",
      y: "0",
      owner: null
    },
    {
      x: "1",
      y: "1",
      owner: "red"
    },
    {
      x: "1",
      y: "2",
      owner: null
    },
    {
      x: "1",
      y: "3",
      owner: "red"
    },
    {
      x: "1",
      y: "4",
      owner: "red"
    },
    {
      x: "1",
      y: "5",
      owner: null
    },
    {
      x: "1",
      y: "6",
      owner: "red"
    },
    {
      x: "1",
      y: "7",
      owner: "red"
    },
    {
      x: "1",
      y: "8",
      owner: "red"
    }
  ],
  [
    {
      x: "2",
      y: "0",
      owner: "red"
    },
    {
      x: "2",
      y: "1",
      owner: "red"
    },
    {
      x: "2",
      y: "2",
      owner: null
    },
    {
      x: "2",
      y: "3",
      owner: null
    },
    {
      x: "2",
      y: "4",
      owner: null
    },
    {
      x: "2",
      y: "5",
      owner: null
    },
    {
      x: "2",
      y: "6",
      owner: null
    },
    {
      x: "2",
      y: "7",
      owner: null
    },
    {
      x: "2",
      y: "8",
      owner: null
    }
  ],
  [
    {
      x: "3",
      y: "0",
      owner: null
    },
    {
      x: "3",
      y: "1",
      owner: null
    },
    {
      x: "3",
      y: "2",
      owner: null
    },
    {
      x: "3",
      y: "3",
      owner: null
    },
    {
      x: "3",
      y: "4",
      owner: null
    },
    {
      x: "3",
      y: "5",
      owner: null
    },
    {
      x: "3",
      y: "6",
      owner: null
    },
    {
      x: "3",
      y: "7",
      owner: null
    },
    {
      x: "3",
      y: "8",
      owner: null
    }
  ],
  [
    {
      x: "4",
      y: "0",
      owner: "red"
    },
    {
      x: "4",
      y: "1",
      owner: "red"
    },
    {
      x: "4",
      y: "2",
      owner: "red"
    },
    {
      x: "4",
      y: "3",
      owner: "blue"
    },
    {
      x: "4",
      y: "4",
      owner: "red"
    },
    {
      x: "4",
      y: "5",
      owner: "blue"
    },
    {
      x: "4",
      y: "6",
      owner: "red"
    },
    {
      x: "4",
      y: "7",
      owner: "red"
    },
    {
      x: "4",
      y: "8",
      owner: "red"
    }
  ],
  [
    {
      x: "5",
      y: "0",
      owner: null
    },
    {
      x: "5",
      y: "1",
      owner: null
    },
    {
      x: "5",
      y: "2",
      owner: null
    },
    {
      x: "5",
      y: "3",
      owner: null
    },
    {
      x: "5",
      y: "4",
      owner: "red"
    },
    {
      x: "5",
      y: "5",
      owner: "red"
    },
    {
      x: "5",
      y: "6",
      owner: "red"
    },
    {
      x: "5",
      y: "7",
      owner: "blue"
    },
    {
      x: "5",
      y: "8",
      owner: "red"
    }
  ],
  [
    {
      x: "6",
      y: "0",
      owner: "red"
    },
    {
      x: "6",
      y: "1",
      owner: "red"
    },
    {
      x: "6",
      y: "2",
      owner: "red"
    },
    {
      x: "6",
      y: "3",
      owner: "blue"
    },
    {
      x: "6",
      y: "4",
      owner: "blue"
    },
    {
      x: "6",
      y: "5",
      owner: "blue"
    },
    {
      x: "6",
      y: "6",
      owner: "red"
    },
    {
      x: "6",
      y: "7",
      owner: "blue"
    },
    {
      x: "6",
      y: "8",
      owner: "blue"
    }
  ],
  [
    {
      x: "7",
      y: "0",
      owner: null
    },
    {
      x: "7",
      y: "1",
      owner: null
    },
    {
      x: "7",
      y: "2",
      owner: "red"
    },
    {
      x: "7",
      y: "3",
      owner: "red"
    },
    {
      x: "7",
      y: "4",
      owner: "blue"
    },
    {
      x: "7",
      y: "5",
      owner: "red"
    },
    {
      x: "7",
      y: "6",
      owner: "blue"
    },
    {
      x: "7",
      y: "7",
      owner: "blue"
    },
    {
      x: "7",
      y: "8",
      owner: "blue"
    }
  ],
  [
    {
      x: "8",
      y: "0",
      owner: "blue"
    },
    {
      x: "8",
      y: "1",
      owner: "blue"
    },
    {
      x: "8",
      y: "2",
      owner: "blue"
    },
    {
      x: "8",
      y: "3",
      owner: "red"
    },
    {
      x: "8",
      y: "4",
      owner: "blue"
    },
    {
      x: "8",
      y: "5",
      owner: "blue"
    },
    {
      x: "8",
      y: "6",
      owner: "blue"
    },
    {
      x: "8",
      y: "7",
      owner: "blue"
    },
    {
      x: "8",
      y: "8",
      owner: "blue"
    }
  ]
];

const testBoardY = [
  [
    {
      x: "0",
      y: "0",
      owner: null
    },
    {
      x: "0",
      y: "1",
      owner: "red"
    },
    {
      x: "0",
      y: "2",
      owner: "blue"
    },
    {
      x: "0",
      y: "3",
      owner: "blue"
    },
    {
      x: "0",
      y: "4",
      owner: "red"
    },
    {
      x: "0",
      y: "5",
      owner: "blue"
    },
    {
      x: "0",
      y: "6",
      owner: "blue"
    },
    {
      x: "0",
      y: "7",
      owner: "red"
    },
    {
      x: "0",
      y: "8",
      owner: null
    }
  ],
  [
    {
      x: "1",
      y: "0",
      owner: null
    },
    {
      x: "1",
      y: "1",
      owner: "red"
    },
    {
      x: "1",
      y: "2",
      owner: "blue"
    },
    {
      x: "1",
      y: "3",
      owner: "red"
    },
    {
      x: "1",
      y: "4",
      owner: "red"
    },
    {
      x: "1",
      y: "5",
      owner: null
    },
    {
      x: "1",
      y: "6",
      owner: "red"
    },
    {
      x: "1",
      y: "7",
      owner: "red"
    },
    {
      x: "1",
      y: "8",
      owner: "red"
    }
  ],
  [
    {
      x: "2",
      y: "0",
      owner: "red"
    },
    {
      x: "2",
      y: "1",
      owner: "red"
    },
    {
      x: "2",
      y: "2",
      owner: "blue"
    },
    {
      x: "2",
      y: "3",
      owner: null
    },
    {
      x: "2",
      y: "4",
      owner: null
    },
    {
      x: "2",
      y: "5",
      owner: null
    },
    {
      x: "2",
      y: "6",
      owner: null
    },
    {
      x: "2",
      y: "7",
      owner: null
    },
    {
      x: "2",
      y: "8",
      owner: null
    }
  ],
  [
    {
      x: "3",
      y: "0",
      owner: null
    },
    {
      x: "3",
      y: "1",
      owner: "red"
    },
    {
      x: "3",
      y: "2",
      owner: "blue"
    },
    {
      x: "3",
      y: "3",
      owner: null
    },
    {
      x: "3",
      y: "4",
      owner: null
    },
    {
      x: "3",
      y: "5",
      owner: null
    },
    {
      x: "3",
      y: "6",
      owner: null
    },
    {
      x: "3",
      y: "7",
      owner: null
    },
    {
      x: "3",
      y: "8",
      owner: null
    }
  ],
  [
    {
      x: "4",
      y: "0",
      owner: null
    },
    {
      x: "4",
      y: "1",
      owner: "red"
    },
    {
      x: "4",
      y: "2",
      owner: "blue"
    },
    {
      x: "4",
      y: "3",
      owner: "red"
    },
    {
      x: "4",
      y: "4",
      owner: "red"
    },
    {
      x: "4",
      y: "5",
      owner: "red"
    },
    {
      x: "4",
      y: "6",
      owner: "red"
    },
    {
      x: "4",
      y: "7",
      owner: "red"
    },
    {
      x: "4",
      y: "8",
      owner: null
    }
  ],
  [
    {
      x: "5",
      y: "0",
      owner: null
    },
    {
      x: "5",
      y: "1",
      owner: "blue"
    },
    {
      x: "5",
      y: "2",
      owner: "blue"
    },
    {
      x: "5",
      y: "3",
      owner: null
    },
    {
      x: "5",
      y: "4",
      owner: "red"
    },
    {
      x: "5",
      y: "5",
      owner: "red"
    },
    {
      x: "5",
      y: "6",
      owner: "red"
    },
    {
      x: "5",
      y: "7",
      owner: "blue"
    },
    {
      x: "5",
      y: "8",
      owner: "red"
    }
  ],
  [
    {
      x: "6",
      y: "0",
      owner: "red"
    },
    {
      x: "6",
      y: "1",
      owner: "blue"
    },
    {
      x: "6",
      y: "2",
      owner: "blue"
    },
    {
      x: "6",
      y: "3",
      owner: "blue"
    },
    {
      x: "6",
      y: "4",
      owner: "blue"
    },
    {
      x: "6",
      y: "5",
      owner: "blue"
    },
    {
      x: "6",
      y: "6",
      owner: "red"
    },
    {
      x: "6",
      y: "7",
      owner: "blue"
    },
    {
      x: "6",
      y: "8",
      owner: "blue"
    }
  ],
  [
    {
      x: "7",
      y: "0",
      owner: null
    },
    {
      x: "7",
      y: "1",
      owner: null
    },
    {
      x: "7",
      y: "2",
      owner: "blue"
    },
    {
      x: "7",
      y: "3",
      owner: "red"
    },
    {
      x: "7",
      y: "4",
      owner: "blue"
    },
    {
      x: "7",
      y: "5",
      owner: "red"
    },
    {
      x: "7",
      y: "6",
      owner: "blue"
    },
    {
      x: "7",
      y: "7",
      owner: "blue"
    },
    {
      x: "7",
      y: "8",
      owner: "blue"
    }
  ],
  [
    {
      x: "8",
      y: "0",
      owner: "blue"
    },
    {
      x: "8",
      y: "1",
      owner: "blue"
    },
    {
      x: "8",
      y: "2",
      owner: "blue"
    },
    {
      x: "8",
      y: "3",
      owner: "blue"
    },
    {
      x: "8",
      y: "4",
      owner: "red"
    },
    {
      x: "8",
      y: "5",
      owner: "red"
    },
    {
      x: "8",
      y: "6",
      owner: "blue"
    },
    {
      x: "8",
      y: "7",
      owner: "red"
    },
    {
      x: "8",
      y: "8",
      owner: "red"
    }
  ]
];

const testBoardD = [
  [
    {
      x: "0",
      y: "0",
      owner: "blue"
    },
    {
      x: "0",
      y: "1",
      owner: null
    },
    {
      x: "0",
      y: "2",
      owner: null
    },
    {
      x: "0",
      y: "3",
      owner: null
    },
    {
      x: "0",
      y: "4",
      owner: null
    },
    {
      x: "0",
      y: "5",
      owner: null
    },
    {
      x: "0",
      y: "6",
      owner: null
    },
    {
      x: "0",
      y: "7",
      owner: null
    },
    {
      x: "0",
      y: "8",
      owner: "blue"
    }
  ],
  [
    {
      x: "1",
      y: "0",
      owner: null
    },
    {
      x: "1",
      y: "1",
      owner: "blue"
    },
    {
      x: "1",
      y: "2",
      owner: null
    },
    {
      x: "1",
      y: "3",
      owner: null
    },
    {
      x: "1",
      y: "4",
      owner: null
    },
    {
      x: "1",
      y: "5",
      owner: null
    },
    {
      x: "1",
      y: "6",
      owner: null
    },
    {
      x: "1",
      y: "7",
      owner: "blue"
    },
    {
      x: "1",
      y: "8",
      owner: null
    }
  ],
  [
    {
      x: "2",
      y: "0",
      owner: null
    },
    {
      x: "2",
      y: "1",
      owner: null
    },
    {
      x: "2",
      y: "2",
      owner: "red"
    },
    {
      x: "2",
      y: "3",
      owner: null
    },
    {
      x: "2",
      y: "4",
      owner: null
    },
    {
      x: "2",
      y: "5",
      owner: null
    },
    {
      x: "2",
      y: "6",
      owner: "blue"
    },
    {
      x: "2",
      y: "7",
      owner: null
    },
    {
      x: "2",
      y: "8",
      owner: null
    }
  ],
  [
    {
      x: "3",
      y: "0",
      owner: null
    },
    {
      x: "3",
      y: "1",
      owner: null
    },
    {
      x: "3",
      y: "2",
      owner: null
    },
    {
      x: "3",
      y: "3",
      owner: "red"
    },
    {
      x: "3",
      y: "4",
      owner: null
    },
    {
      x: "3",
      y: "5",
      owner: "blue"
    },
    {
      x: "3",
      y: "6",
      owner: null
    },
    {
      x: "3",
      y: "7",
      owner: null
    },
    {
      x: "3",
      y: "8",
      owner: null
    }
  ],
  [
    {
      x: "4",
      y: "0",
      owner: null
    },
    {
      x: "4",
      y: "1",
      owner: null
    },
    {
      x: "4",
      y: "2",
      owner: null
    },
    {
      x: "4",
      y: "3",
      owner: null
    },
    {
      x: "4",
      y: "4",
      owner: "blue"
    },
    {
      x: "4",
      y: "5",
      owner: null
    },
    {
      x: "4",
      y: "6",
      owner: null
    },
    {
      x: "4",
      y: "7",
      owner: null
    },
    {
      x: "4",
      y: "8",
      owner: null
    }
  ],
  [
    {
      x: "5",
      y: "0",
      owner: null
    },
    {
      x: "5",
      y: "1",
      owner: null
    },
    {
      x: "5",
      y: "2",
      owner: null
    },
    {
      x: "5",
      y: "3",
      owner: null
    },
    {
      x: "5",
      y: "4",
      owner: null
    },
    {
      x: "5",
      y: "5",
      owner: "red"
    },
    {
      x: "5",
      y: "6",
      owner: null
    },
    {
      x: "5",
      y: "7",
      owner: null
    },
    {
      x: "5",
      y: "8",
      owner: null
    }
  ],
  [
    {
      x: "6",
      y: "0",
      owner: null
    },
    {
      x: "6",
      y: "1",
      owner: null
    },
    {
      x: "6",
      y: "2",
      owner: null
    },
    {
      x: "6",
      y: "3",
      owner: null
    },
    {
      x: "6",
      y: "4",
      owner: null
    },
    {
      x: "6",
      y: "5",
      owner: null
    },
    {
      x: "6",
      y: "6",
      owner: null
    },
    {
      x: "6",
      y: "7",
      owner: null
    },
    {
      x: "6",
      y: "8",
      owner: null
    }
  ],
  [
    {
      x: "7",
      y: "0",
      owner: null
    },
    {
      x: "7",
      y: "1",
      owner: null
    },
    {
      x: "7",
      y: "2",
      owner: null
    },
    {
      x: "7",
      y: "3",
      owner: null
    },
    {
      x: "7",
      y: "4",
      owner: null
    },
    {
      x: "7",
      y: "5",
      owner: null
    },
    {
      x: "7",
      y: "6",
      owner: null
    },
    {
      x: "7",
      y: "7",
      owner: null
    },
    {
      x: "7",
      y: "8",
      owner: null
    }
  ],
  [
    {
      x: "8",
      y: "0",
      owner: null
    },
    {
      x: "8",
      y: "1",
      owner: null
    },
    {
      x: "8",
      y: "2",
      owner: null
    },
    {
      x: "8",
      y: "3",
      owner: null
    },
    {
      x: "8",
      y: "4",
      owner: null
    },
    {
      x: "8",
      y: "5",
      owner: null
    },
    {
      x: "8",
      y: "6",
      owner: null
    },
    {
      x: "8",
      y: "7",
      owner: null
    },
    {
      x: "8",
      y: "8",
      owner: null
    }
  ]
];

const testSliceX = () => {
  let winningX = null;
  let winningArray = [];
  let gameWinningArray = []; // just for logging
  let winningY = null;
  let winningColor = null;
  let gameWinningColor = null;
  let setWinner = null;
  let setGameWinner = null;
  let inARow = 1;
  let lastOwner = null;
  let lastY = null;
  let winning = testBoardX.some(element => {
    element.some(subElement => {
      if (
        subElement.owner !== null &&
        lastOwner === subElement.owner &&
        subElement.y - lastY == 1
      ) {
        inARow += 1;
        winningArray.push(subElement.y);
        winningColor = subElement.owner;
        winningX = subElement.x;
        winningY = winningArray[0] - 1;
      } else {
        inARow = 1;
        winningArray.splice(0, winningArray.length);
      }

      lastOwner = subElement.owner;
      lastY = subElement.y;
      /*       console.log("inARow:" + inARow, "X:" + subElement.x, "Y:" + subElement.y);
       */ return inARow >= 5;
    });
    return inARow >= 5;
  });
  /* console.log(`
  Winning X: ${winningX}
  Winning Ys: ${winningArray[0] - 1},${winningArray}
  Winning Color: ${winningColor}`); */

  if (winning) {
    let fullWinning = testBoardX.some(element => {
      element.some(subElement => {
        if (
          subElement.owner !== null &&
          lastOwner === subElement.owner &&
          subElement.y - lastY == 1
        ) {
          inARow += 1;
          gameWinningArray.push(subElement.y); // for console logging
          gameWinningColor = subElement.owner;
        } else {
          inARow = 1;
          gameWinningArray.splice(0, gameWinningArray.length); // for console logging
        }
        lastOwner = subElement.owner;
        lastY = subElement.y;
        return inARow >= 9;
      });
      return inARow >= 9;
    });
    if (fullWinning) {
      setGameWinner = `Game Winner: ${gameWinningColor}`;
      console.log(setGameWinner);
      console.log(`${gameWinningArray[0] - 1},${gameWinningArray}`);
      return true;
    } else {
      setWinner = "Winner: " + winningColor;
      /*       console.log(setWinner, testBoardX[winningX].splice(winningY, 5));
       */ testBoardX[winningX].splice(winningY, 5);
      return true;
    }
  }
};

const testSliceY = () => {
  let winningArray = [];
  let gameWinningArray = [];
  let winningY = null;
  let winningColor = null;
  let gameWinningColor = null;
  let setWinner = null;
  let setGameWinner = null;
  let newTestBoardY = [];
  testBoardY.forEach((x, index) => {
    newTestBoardY.push(testBoardY.map(row => row[index]));
  });
  let inARow = 1;
  let lastOwner = null;
  let lastX = null;
  let winning = newTestBoardY.some(element => {
    element.some(subElement => {
      if (
        subElement.owner !== null &&
        lastOwner === subElement.owner &&
        subElement.x - lastX == 1
      ) {
        inARow += 1;
        winningArray.push(subElement.x);
        winningColor = subElement.owner;
        winningY = subElement.y;
      } else {
        inARow = 1;
        winningArray.splice(0, winningArray.length);
      }

      lastOwner = subElement.owner;
      lastX = subElement.x;
      return inARow >= 5;
    });
    return inARow >= 5;
  });
  /* console.log(`
    Winning Xs: ${winningArray[0] - 1},${winningArray}
    Winning Y: ${winningY}
    Winning Color: ${winningColor}`); */

  if (winning) {
    let fullWinning = newTestBoardY.some(element => {
      element.some(subElement => {
        if (
          subElement.owner !== null &&
          lastOwner === subElement.owner &&
          subElement.x - lastX == 1
        ) {
          inARow += 1;
          gameWinningArray.push(subElement.x); // just for log
          gameWinningColor = subElement.owner;
        } else {
          inARow = 1;
          gameWinningArray.splice(0, winningArray.length); // don't think I need
        }

        lastOwner = subElement.owner;
        lastX = subElement.x;
        return inARow >= 9;
      });
      return inARow >= 9;
    });
    if (fullWinning) {
      setGameWinner = `Game Winner: ${gameWinningColor}`;
      gameWinningArray.unshift(gameWinningArray[0] - 1); // console log only
      /*       console.log(gameWinningArray); // just for console log
       */ console.log(setGameWinner);
      return true;
    } else {
      let consoleSplice = []; // just for logging test
      winningArray.unshift(winningArray[0] - 1);
      setWinner = "Winner: " + winningColor;
      winningArray.forEach(x => {
        consoleSplice.push(testBoardY[x].splice(winningY, 1)); // get rid of the push in order to work
      });
      /* console.log(setWinner, consoleSplice); */
      return true;
    }
  }
};

const testSliceD = () => {
  let inARow = 1;
  let checkColor = [0, 1, 2, 3, 4];
  let colorArray = [];
  let currentColor = null;
  let winningColor = null;
  let winning = testBoardD.some(element => {
    element.some(subElement => {
      if (subElement.owner !== null && subElement.x <= 4 && subElement.y <= 4) {
        currentColor = subElement.owner;
        checkColor.forEach(i => {
          colorArray.push(
            testBoardD[+subElement.x + i][+subElement.y + i].owner
          );
        });

        if (
          colorArray[0] === currentColor &&
          colorArray[1] === currentColor &&
          colorArray[2] === currentColor &&
          colorArray[3] === currentColor &&
          colorArray[4] === currentColor
        ) {
          winningColor = currentColor;
          inARow = 5;
        } else {
          colorArray = [];
        }
      } else if (
        subElement.owner !== null &&
        subElement.x <= 4 &&
        subElement.y >= 4
      ) {
        currentColor = subElement.owner;
        checkColor.forEach(i => {
          colorArray.push(
            testBoardD[+subElement.x + i][+subElement.y - i].owner
          );
        });
        console.log(colorArray);

        if (
          colorArray[0] === currentColor &&
          colorArray[1] === currentColor &&
          colorArray[2] === currentColor &&
          colorArray[3] === currentColor &&
          colorArray[4] === currentColor
        ) {
          winningColor = currentColor;
          inARow = 5;
        } else {
          colorArray = [];
        }
      }

      return inARow >= 5;
    });
    return inARow >= 5;
  });
  if (winning) {
    return true;
  }
};
/* for (let i = 0; i < 5; i++) {
          // maybe creat an array of 5 and use foreach instead
                     console.log(testBoardD[+subElement.x + i][+subElement.y + i].owner);
           

          let d1Array = [];
          d1Array = testBoardD[+subElement.x + i][+subElement.y + i].owner;
          if (
            (subElement.x <= 4 &&
              subElement.y <= 4 &&
              testBoardD[+subElement.x + i][+subElement.y + i].owner ===
                currentColor) ||
            (subElement.x >= 4 &&
              subElement.y >= 4 &&
              testBoardD[+subElement.x + i][+subElement.y - i].owner ===
                currentColor)
          ) {
            console.log(d1Array);
            winningColor = currentColor;
            inARow = 5;
          }
        } */

[0, 0], [1, 1], [2, 2], [3, 3], [4, 4];

/* it("checks for win on x", () => {
  expect(testSliceX()).toEqual(true);
});

it("checks for win on y", () => {
  expect(testSliceY()).toEqual(true);
}); */

const testSliceE = () => {
  let testArray = ["red", "red", "red", "red", "red"];
  let winning = testArray.every(x => {
    x === "red";
  });
  let result = testArray.every(x => {
    x === "red";
  });
  console.log(result);
  if (winning) {
    return true;
  }
};

it("checks for win on diagonal", () => {
  expect(testSliceD()).toEqual(true);
});
