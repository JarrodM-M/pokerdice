import React from "react";
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

it("checks for win on x", () => {
  expect(
    (table1[0][0].owner = red),
    (table1[1][0].owner = red),
    (table1[2][0].owner = red),
    (table1[3][0].owner = red),
    (table1[4][0].owner = red),
    (table1[5][0].owner = red)
  ).toEqual(true);
});
