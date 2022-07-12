import React, { useState } from "react";
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
import redToken from "../assets/images/redcoin.png";
import blueToken from "../assets/images/bluecoin.png";

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

const sortStraight = a => {
  let i = a.sort();
  let j = [1, 2, 3, 4, 5];
  let k = [2, 3, 4, 5, 6];
  return i.toString() === j.toString() || i.toString() === k.toString();
};

const sortFullHouse = a => {
  let i = a.sort();
  let j = [i[0], i[0], i[2], i[2], i[2]];
  let k = [i[0], i[0], i[0], i[3], i[3]];
  if (i[0] == null) return false;
  return i.toString() === j.toString() || i.toString() === k.toString();
};

const luckySeven = a => {
  let i = a.reduce((x, y) => x + y, 0);
  return i === 7;
};

const luckyEleven = a => {
  let i = a.reduce((x, y) => x + y, 0);
  return i === 11;
};

const tileFunction = (xValue, yValue, dice, owner) => {
  let a = dice;
  if (owner === "green") return { imgSrc: redToken, tile: false };
  else if (owner === "blue") return { imgSrc: blueToken, tile: false };
  else if (xValue + yValue === "00" || xValue + yValue === "88") {
    const tileBoolean = sortStraight(a);
    return { imgSrc: zeroZero, tile: tileBoolean };
  } else if (xValue + yValue === "01" || xValue + yValue === "87") {
    const tileBoolean = isSubset([6, 6, 6, 6], a);
    return { imgSrc: zeroOne, tile: tileBoolean };
  } else if (xValue + yValue === "02" || xValue + yValue === "86") {
    const tileBoolean = isSubset([5, 5, 6, 6], a);
    return { imgSrc: zeroTwo, tile: tileBoolean };
  } else if (xValue + yValue === "03" || xValue + yValue === "85") {
    const tileBoolean = isSubset([4, 4, 6, 6], a);
    return { imgSrc: zeroThree, tile: tileBoolean };
  } else if (xValue + yValue === "04") {
    const tileBoolean = isSubset([2, 2], a);
    return { imgSrc: zeroFour, tile: tileBoolean };
  } else if (xValue + yValue === "05" || xValue + yValue === "83") {
    const tileBoolean = isSubset([3, 3, 6, 6], a);
    return { imgSrc: zeroFive, tile: tileBoolean };
  } else if (xValue + yValue === "06" || xValue + yValue === "82") {
    const tileBoolean = isSubset([2, 2, 6, 6], a);
    return { imgSrc: zeroSix, tile: tileBoolean };
  } else if (xValue + yValue === "07" || xValue + yValue === "81") {
    const tileBoolean = isSubset([1, 1, 6, 6], a);
    return { imgSrc: zeroSeven, tile: tileBoolean };
  } else if (xValue + yValue === "08" || xValue + yValue === "80") {
    const tileBoolean = sortStraight(a);
    return { imgSrc: zeroEight, tile: tileBoolean };
  } else if (xValue + yValue === "10") {
    const tileBoolean = isSubset([6, 6], a);
    return { imgSrc: oneZero, tile: tileBoolean };
  } else if (
    xValue + yValue === "11" ||
    xValue + yValue === "17" ||
    xValue + yValue === "22" ||
    xValue + yValue === "26" ||
    xValue + yValue === "33" ||
    xValue + yValue === "35" ||
    xValue + yValue === "53" ||
    xValue + yValue === "55" ||
    xValue + yValue === "62" ||
    xValue + yValue === "66" ||
    xValue + yValue === "71" ||
    xValue + yValue === "77"
  ) {
    const tileBoolean = sortFullHouse(a);
    return { imgSrc: oneOne, tile: tileBoolean };
  } else if (xValue + yValue === "12" || xValue + yValue === "76") {
    const tileBoolean = isSubset([1, 1, 5, 5], a);
    return { imgSrc: oneTwo, tile: tileBoolean };
  } else if (xValue + yValue === "13" || xValue + yValue === "75") {
    const tileBoolean = isSubset([2, 2, 5, 5], a);
    return { imgSrc: oneThree, tile: tileBoolean };
  } else if (xValue + yValue === "14" || xValue + yValue === "74") {
    const tileBoolean = isSubset([3, 3, 5, 5], a);
    return { imgSrc: oneFour, tile: tileBoolean };
  } else if (xValue + yValue === "15" || xValue + yValue === "73") {
    const tileBoolean = isSubset([4, 4, 5, 5], a);
    return { imgSrc: oneFive, tile: tileBoolean };
  } else if (xValue + yValue === "16" || xValue + yValue === "72") {
    const tileBoolean = isSubset([5, 5, 5, 5], a);
    return { imgSrc: oneSix, tile: tileBoolean };
  } else if (xValue + yValue === "18") {
    const tileBoolean = isSubset([4, 4], a);
    return { imgSrc: oneEight, tile: tileBoolean };
  } else if (xValue + yValue === "20" || xValue + yValue === "68") {
    const tileBoolean = isSubset([4, 4, 4, 4], a);
    return { imgSrc: twoZero, tile: tileBoolean };
  } else if (xValue + yValue === "21" || xValue + yValue === "67") {
    const tileBoolean = isSubset([2, 2, 2], a);
    return { imgSrc: twoOne, tile: tileBoolean };
  } else if (xValue + yValue === "23" || xValue + yValue === "65") {
    const tileBoolean = isSubset([3, 3, 4, 4], a);
    return { imgSrc: twoThree, tile: tileBoolean };
  } else if (xValue + yValue === "24" || xValue + yValue === "64") {
    const tileBoolean = isSubset([1, 1, 1, 1], a);
    return { imgSrc: twoFour, tile: tileBoolean };
  } else if (xValue + yValue === "25" || xValue + yValue === "63") {
    const tileBoolean = isSubset([2, 2, 4, 4], a);
    return { imgSrc: twoFive, tile: tileBoolean };
  } else if (xValue + yValue === "27" || xValue + yValue === "61") {
    const tileBoolean = isSubset([6, 6, 6], a);
    return { imgSrc: twoSeven, tile: tileBoolean };
  } else if (xValue + yValue === "28" || xValue + yValue === "60") {
    const tileBoolean = isSubset([1, 1, 4, 4], a);
    return { imgSrc: twoEight, tile: tileBoolean };
  } else if (xValue + yValue === "30" || xValue + yValue === "58") {
    const tileBoolean = isSubset([4, 4, 4], a);
    return { imgSrc: threeZero, tile: tileBoolean };
  } else if (xValue + yValue === "31" || xValue + yValue === "57") {
    const tileBoolean = isSubset([1, 1, 1], a);
    return { imgSrc: threeOne, tile: tileBoolean };
  } else if (xValue + yValue === "32" || xValue + yValue === "56") {
    const tileBoolean = isSubset([3, 3, 3, 3], a);
    return { imgSrc: threeTwo, tile: tileBoolean };
  } else if (xValue + yValue === "34" || xValue + yValue === "54") {
    const tileBoolean = isSubset([2, 2, 3, 3], a);
    return { imgSrc: threeFour, tile: tileBoolean };
  } else if (xValue + yValue === "36" || xValue + yValue === "52") {
    const tileBoolean = isSubset([1, 1, 3, 3], a);
    return { imgSrc: threeSix, tile: tileBoolean };
  } else if (xValue + yValue === "37" || xValue + yValue === "51") {
    const tileBoolean = isSubset([3, 3, 3], a);
    return { imgSrc: threeSeven, tile: tileBoolean };
  } else if (xValue + yValue === "38" || xValue + yValue === "50") {
    const tileBoolean = isSubset([5, 5, 5], a);
    return { imgSrc: threeEight, tile: tileBoolean };
  } else if (xValue + yValue === "40" || xValue + yValue === "48") {
    const tileBoolean = luckySeven(a);
    return { imgSrc: fourZero, tile: tileBoolean };
  } else if (xValue + yValue === "41" || xValue + yValue === "47") {
    const tileBoolean = isSubset([1, 1, 2, 2], a);
    return { imgSrc: fourOne, tile: tileBoolean };
  } else if (xValue + yValue === "42" || xValue + yValue === "46") {
    const tileBoolean = luckyEleven(a);
    return { imgSrc: fourTwo, tile: tileBoolean };
  } else if (xValue + yValue === "43" || xValue + yValue === "45") {
    const tileBoolean = isSubset([2, 2, 2, 2], a);
    return { imgSrc: fourThree, tile: tileBoolean };
  } else if (xValue + yValue === "44") {
    const tileBoolean = false;
    return { imgSrc: fourFour, tile: tileBoolean };
  } else if (xValue + yValue === "70") {
    const tileBoolean = isSubset([5, 5], a);
    return { imgSrc: sevenZero, tile: tileBoolean };
  } else if (xValue + yValue === "78") {
    const tileBoolean = isSubset([3, 3], a);
    return { imgSrc: sevenEight, tile: tileBoolean };
  }
  const tileBoolean = isSubset([1, 1], a);
  return { imgSrc: eightFour, tile: tileBoolean };
};
export default function Tile({ x, y, dice, setOwner, owner }) {
  let a = [...dice];
  const { imgSrc, tile } = tileFunction(x, y, a, owner);
  let className = cx({
    tileContainer: true,
    tileContainerSel: tile
  });
  return (
    <div
      className={className}
      onClick={() => {
        if (tile) {
          setOwner();
        }
      }}
    >
      <img src={imgSrc} alt="" className="tile" />
      {owner === "red" && (
        <div className="tileContainerRed">
          <img src={redToken} className="tileTwo" />
        </div>
      )}
    </div>
  );
}
