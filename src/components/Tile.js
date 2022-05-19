import React from "react";
import classNames from "classnames/bind";
import "./Tile.css";
import styles from "./Tile.css";

import zeroZero from "../assets/images/board/00.png";
import zeroOne from "../assets/images/board/01.png";
import zeroTwo from "../assets/images/board/02.png";
import zeroThree from "../assets/images/board/03.png";
import zeroFour from "../assets/images/board/04.png";
import zeroFive from "../assets/images/board/05.png";
import zeroSix from "../assets/images/board/06.png";
import zeroSeven from "../assets/images/board/07.png";
import zeroEight from "../assets/images/board/08.png";
import oneZero from "../assets/images/board/10.png";
import oneOne from "../assets/images/board/11.png";
import oneTwo from "../assets/images/board/12.png";
import oneThree from "../assets/images/board/13.png";
import oneFour from "../assets/images/board/14.png";
import oneFive from "../assets/images/board/15.png";
import oneSix from "../assets/images/board/16.png";
import oneEight from "../assets/images/board/18.png";
import twoZero from "../assets/images/board/20.png";
import twoOne from "../assets/images/board/21.png";
import twoThree from "../assets/images/board/23.png";
import twoFour from "../assets/images/board/24.png";
import twoFive from "../assets/images/board/25.png";
import twoSeven from "../assets/images/board/27.png";
import twoEight from "../assets/images/board/28.png";
import threeZero from "../assets/images/board/30.png";
import threeOne from "../assets/images/board/31.png";
import threeTwo from "../assets/images/board/32.png";
import threeFour from "../assets/images/board/34.png";
import threeSix from "../assets/images/board/36.png";
import threeSeven from "../assets/images/board/37.png";
import threeEight from "../assets/images/board/38.png";
import fourZero from "../assets/images/board/40.png";
import fourOne from "../assets/images/board/41.png";
import fourTwo from "../assets/images/board/42.png";
import fourThree from "../assets/images/board/43.png";
import fourFour from "../assets/images/board/44.png";
import sevenZero from "../assets/images/board/70.png";
import sevenEight from "../assets/images/board/78.png";
import eightFour from "../assets/images/board/84.png";

/*<img src="G:\Coding\pokerdice\src\assets\images\board\00.png"></img>*/
let cx = classNames.bind(styles);

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

let className = {};

let srcValue = {};

const tileFunction = (xValue, yValue, diceValue) => {
  if (xValue + yValue === "00" || xValue + yValue === "88") {
    console.log("first");
    const tileValue = [1, 2, 3, 4, 5];
    const srcValue = { zeroZero };
    let className = cx({
      tileContainer: true,
      tileContainerSel: isSubset(tileValue, diceValue)
    });
  }
};

export default function Tile({ x, y, dice }) {
  tileFunction(x, y, dice);

  return (
    <div className={className}>
      <img src={srcValue} alt="" className="tile" />
    </div>
  );
}
