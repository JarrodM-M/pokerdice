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

const testBoard = [
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
      owner: null
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
      owner: "red"
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
      owner: "blue"
    },
    {
      x: "6",
      y: "7",
      owner: "blue"
    },
    {
      x: "6",
      y: "8",
      owner: "red"
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
      owner: "red"
    },
    {
      x: "7",
      y: "7",
      owner: "blue"
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
      owner: "blue"
    },
    {
      x: "8",
      y: "1",
      owner: "red"
    },
    {
      x: "8",
      y: "2",
      owner: "red"
    },
    {
      x: "8",
      y: "3",
      owner: "red"
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
      owner: "blue"
    }
  ]
];
// create a 'winning array' that logs the element.y location when element.owner is 'red' 5 times for slicing from board.
// maybe add the 'winning array' of element.y when if (element.owner === 'red')
// but add else if (last0 !== 'red') { destroy winning array becuase it is no longer winning}
let winningX = null;
let winningArray = [];
let winningY = null;
const testSlice = () => {
  let inARow = 1;
  let lastOwner = null;
  let lastX = null;
  let lastY = null;
  let fiveRow = false;
  let winning = testBoard.some(element => {
    element.forEach(subElement => {
      if (inARow >= 5) {
        fiveRow = true;
        winningX = subElement.x;
        winningY = winningArray[0] - 1;
      }
      if (
        subElement.owner === "red" &&
        lastOwner === subElement.owner &&
        lastX === subElement.x && // this is rendundant since y - lastY !== 1 in this case
        subElement.y - lastY == 1
      ) {
        inARow += 1;
        winningArray.push(subElement.y);
      } else {
        inARow = 1;
        winningArray.splice(0, winningArray.length);
      }

      lastOwner = subElement.owner;
      lastX = subElement.x;
      lastY = subElement.y;
      /*       console.log("inARow:" + inARow, "X:" + subElement.x, "Y:" + subElement.y);
       */
    });
    return fiveRow;
  });
  console.log("Winning X:" + winningX, "Winning Y:" + winningY);

  if (winning === true) {
    testBoard[winningX].splice(winningY, 5);
  }
  console.log(testBoard);
  return true;
};

it("checks for win on x", () => {
  expect(testSlice()).toEqual(true);
});
