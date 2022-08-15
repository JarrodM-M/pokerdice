import testBoardD from "./tests/testBoardD.json";
import testBoardY from "./tests/testBoardY.json";
import testBoardX from "./tests/testBoardX.json";
import testBoardMain from "./tests/testBoardMain.json";

// Maybe the more efficient way is to not call the check winner funcions on the entire board each time -
// Instead, everytime a piece is played on gameboard.js and the .owner property is set to 'red or 'blue'
// that .owners parent object would be added to an empty test board on which you would call the check winner functions

const testSliceX = board => {
  let winningArray = [];
  let winningX = null;
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
    winningArray.unshift(winningArray[0] - 1);
    winningArray.map(y => (board[winningX][y].winOn = "onX"));
    console.log(setWinner + "test X");
  }
  return true;
};

const testFullX = board => {
  let lastY = null;
  let lastOwner = null;
  let inARow = 1;
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
        gameWinningColor = subElement.owner;
      } else {
        inARow = 1;
      }
      lastOwner = subElement.owner;
      lastY = subElement.y;
      return inARow >= 9;
    });
    return inARow >= 9;
  });
  if (fullWinning) {
    setGameWinner = `Game Winner: ${gameWinningColor}`;
    console.log(setGameWinner + "full x");
    return true;
  }
};

const testSliceY = board => {
  let winningArray = [];
  let winningY = null;
  let winningColor = null;
  let setWinner = null;
  let inARow = 1;
  let lastOwner = null;
  let lastX = null;
  let newTestBoard = board.map((x, index) => board.map(y => y[index]));

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
    setWinner = "Winner: " + winningColor;
    winningArray.unshift(winningArray[0] - 1);
    winningArray.map(x => {
      board[x][winningY].winOn = "onY";
    });
    console.log(setWinner + "testY");

    return true;
  }
};

const testFullY = board => {
  let gameWinningColor = null;
  let setGameWinner = null;
  let lastX = null;
  let lastOwner = null;
  let inARow = 1;
  let newTestBoard = board.map((x, index) => board.map(row => row[index]));

  let fullWinning = newTestBoard.some(element => {
    element.some(subElement => {
      if (
        subElement.owner !== null &&
        lastOwner === subElement.owner &&
        subElement.x - lastX == 1
      ) {
        inARow += 1;
        gameWinningColor = subElement.owner;
      } else {
        inARow = 1;
      }

      lastOwner = subElement.owner;
      lastX = subElement.x;
      return inARow >= 9;
    });
    return inARow >= 9;
  });
  if (fullWinning) {
    setGameWinner = `Game Winner: ${gameWinningColor}`;
    console.log(setGameWinner + "full y");
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
        colorArray.push(
          ...checkColor.map(i => board[+subElement.x + i][+subElement.y + i])
        );
        if (
          colorArray.every(x => x.owner === currentColor && x.winOn !== "onDR")
        ) {
          winningColor = currentColor;
          inARow = 5;
          colorArray.map(cA => (board[cA.x][cA.y].winON = "onDR"));
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
        colorArray.push(
          ...checkColor.map(i => board[+subElement.x + i][+subElement.y - i])
        );

        if (
          colorArray.every(x => x.owner === currentColor && x.winOn !== "onDL")
        ) {
          winningColor = currentColor;
          inARow = 5;
          colorArray.map(cA => (board[cA.x][cA.y].winON = "onDL"));
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
    return true;
  }
};

131;
it("checks for full line on x", () => {
  expect(testFullX(testBoardMain)).toEqual(true);
});

it("checks for full line on y", () => {
  expect(testFullY(testBoardMain)).toEqual(true);
});

it("checks for win on x", () => {
  expect(testSliceX(testBoardMain)).toEqual(true);
});

it("checks for win on y", () => {
  expect(testSliceY(testBoardMain)).toEqual(true);
});

it("checks for win on diagonal", () => {
  expect(testSliceD(testBoardMain)).toEqual(true);
});
