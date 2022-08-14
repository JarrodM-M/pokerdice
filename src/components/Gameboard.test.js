import testBoardD from "./tests/testBoardD.json";
import testBoardY from "./tests/testBoardY.json";
import testBoardX from "./tests/testBoardX.json";
import testBoardMain from "./tests/testBoardMain.json";

// Maybe the more efficient way is to not call the check winner funcions on the entire board each time -
// Instead, everytime a piece is played on gameboard.js and the .owner property is set to 'red or 'blue'
// that .owners parent object would be added to an empty test board on which you would call the check winner functions

const winTest = (
  board,
  winningArray,
  winningColor,
  winningEl,
  winningOp,
  inARow,
  lastO
) => {
  let lastEl = null;
  board.some(element => {
    element.some(subElement => {
      if (
        subElement.owner !== null &&
        lastO === subElement.owner &&
        subElement.y - lastEl == 1
      ) {
        inARow += 1;
        winningArray.push(subElement.y);
        winningColor = subElement.owner;
        winningEl = subElement.x;
        winningOp = winningArray[0] - 1;
      } else {
        inARow = 1;
        winningArray.splice(0, winningArray.length);
      }
      lastO = subElement.owner;
      lastEl = subElement.y;
      return inARow >= 5;
    });
    return inARow >= 5;
  });
};

const testSliceX = board => {
  let winningArray = [];
  let winningX = null;
  let winningY = null;
  let winningColor = null;
  let setWinner = null;
  let inARow = 1;
  let lastOwner = null;
  let lastY;
  let winning = board.some(element => {
    element.some(subElement => {
      if (
        subElement.owner !== null &&
        lastOwner === subElement.owner &&
        subElement.y - lastY == 1 &&
        subElement.winOn !== "onX"
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
      return inARow >= 5;
    });
    return inARow >= 5;
  });

  if (winning) {
    setWinner = "Winner: " + winningColor;
    console.log(setWinner, board[winningX].splice(winningY, 5)); // use the splice from this
    return true;
  }
};

const testFullX = board => {
  let lastY = null;
  let lastOwner = null;
  let inARow = 1;
  let gameWinningArray = [];
  let gameWinningColor = null;
  let setGameWinner = null;
  let fullWinning = board.some(element => {
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
  }
};

const testSliceY = board => {
  let winningArray = [];
  let gameWinningArray = [];
  let winningY = null;
  let winningColor = null;
  let gameWinningColor = null;
  let setWinner = null;
  let setGameWinner = null;
  let newTestBoard = [];
  let inARow = 1;
  let lastOwner = null;
  let lastX = null;
  board.forEach((x, index) => {
    newTestBoard.push(board.map(row => row[index]));
  });

  let winning = newTestBoard.some(element => {
    element.some(subElement => {
      if (
        subElement.owner !== null &&
        lastOwner === subElement.owner &&
        subElement.x - lastX == 1 &&
        subElement.winOn !== "onY"
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

  if (winning) {
    let consoleSplice = []; // just for logging test
    winningArray.unshift(winningArray[0] - 1);
    setWinner = "Winner: " + winningColor;
    winningArray.forEach(x => {
      consoleSplice.push(board[x].splice(winningY, 1)); // get rid of the push in order to work
    });
    /* console.log(setWinner, consoleSplice); */
    return true;
  }
};

const testFullY = board => {
  let gameWinningColor = null;
  let setGameWinner = null;
  let newTestBoard = [];
  let gameWinningArray = [];
  let lastX = null;
  let lastOwner = null;
  let inARow = 1;
  board.forEach((x, index) => {
    newTestBoard.push(board.map(row => row[index]));
  });
  let fullWinning = newTestBoard.some(element => {
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
        gameWinningArray.splice(0, gameWinningArray.length); // don't think I need
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
    console.log(gameWinningArray); // just for console log
    console.log(setGameWinner);
    return true;
  }
};

const testSliceD = board => {
  let inARow = 1;
  let checkColor = [0, 1, 2, 3, 4];
  let colorArray = [];
  let currentColor = null;
  let winningColor = null;
  let winning = board.some(element => {
    element.some(subElement => {
      if (
        subElement.owner !== null &&
        subElement.x <= 4 &&
        subElement.y <= 4 &&
        subElement.winOn !== "onDR"
      ) {
        currentColor = subElement.owner;
        checkColor.forEach(i => {
          colorArray.push(board[+subElement.x + i][+subElement.y + i]);
        });
        if (colorArray.every(x => x.owner === currentColor)) {
          winningColor = currentColor;
          inARow = 5;
        } else {
          colorArray = [];
        }
      } else if (
        subElement.owner !== null &&
        subElement.x <= 4 &&
        subElement.y >= 4 &&
        subElement.winOn !== "onDL"
      ) {
        currentColor = subElement.owner;
        checkColor.forEach(i => {
          colorArray.push(board[+subElement.x + i][+subElement.y - i]);
        });

        if (colorArray.every(x => x.owner === currentColor)) {
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
    console.log(colorArray);
    console.log(winningColor);
    colorArray.forEach(cA => {
      board[cA.x].splice(cA.y, 1);
    });
    return true;
  }
};

it("checks for full line on x", () => {
  expect(testFullX(testBoardMain)).toEqual(true);
});

it("checks for full line on y", () => {
  expect(testFully(testBoardMain)).toEqual(true);
});

it.only("checks for win on x", () => {
  expect(testSliceX(testBoardMain)).toEqual(true);
});

it("checks for win on y", () => {
  expect(testSliceY(testBoardMain)).toEqual(true);
});

it("checks for win on diagonal", () => {
  expect(testSliceD(testBoardMain)).toEqual(true);
});
