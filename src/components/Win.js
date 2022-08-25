const checkFree = arr => {
  let index = arr.map(i => i.x + i.y).indexOf("44");
  return index === 1 || index === 2 || index === 3;
};

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
