export default function Tile({ x, y, dice }) {
  let tileValue = [0];
  let className = cx({
    tileContainer: true,
    tileContainerSel: isSubset(tileValue, dice)
  });
  if (x + y === "00" || x + y === "88")
    return (
      <div className={className}>
        <img src={zeroZero} alt="" className="tile" />
      </div>
    );
  else if (x + y === "01" || x + y === "87")
    return (
      <div className="tile-container">
        <img src={zeroOne} alt="" className="tile" />
      </div>
    );
  else if (x + y === "02" || x + y === "86")
    return (
      <div className="tile-container">
        <img src={zeroTwo} alt="" className="tile" />
      </div>
    );
  else if (x + y === "03" || x + y === "85")
    return (
      <div className="tile-container">
        <img src={zeroThree} alt="" className="tile" />
      </div>
    );
  else if (x + y === "04")
    return (
      <div className="tile-container">
        <img src={zeroFour} alt="" className="tile" />
      </div>
    );
  else if (x + y === "05" || x + y === "83")
    return (
      <div className="tile-container">
        <img src={zeroFive} alt="" className="tile" />
      </div>
    );
  else if (x + y === "06" || x + y === "82")
    return (
      <div className="tile-container">
        <img src={zeroSix} alt="" className="tile" />
      </div>
    );
  else if (x + y === "07" || x + y === "81")
    return (
      <div className="tile-container">
        <img src={zeroSeven} alt="" className="tile" />
      </div>
    );
  else if (x + y === "08" || x + y === "80")
    return (
      <div className="tile-container">
        <img src={zeroEight} alt="" className="tile" />
      </div>
    );
  else if (x + y === "10")
    return (
      <div className="tile-container">
        <img src={oneZero} alt="" className="tile" />
      </div>
    );
  else if (
    x + y === "11" ||
    x + y === "17" ||
    x + y === "22" ||
    x + y === "26" ||
    x + y === "33" ||
    x + y === "35" ||
    x + y === "53" ||
    x + y === "55" ||
    x + y === "62" ||
    x + y === "66" ||
    x + y === "71" ||
    x + y === "77"
  )
    return (
      <div className="tile-container">
        <img src={oneOne} alt="" className="tile" />
      </div>
    );
  else if (x + y === "12" || x + y === "76")
    return (
      <div className="tile-container">
        <img src={oneTwo} alt="" className="tile" />
      </div>
    );
  else if (x + y === "13" || x + y === "75")
    return (
      <div className="tile-container">
        <img src={oneThree} alt="" className="tile" />
      </div>
    );
  else if (x + y === "14" || x + y === "74")
    return (
      <div className="tile-container">
        <img src={oneFour} alt="" className="tile" />
      </div>
    );
  else if (x + y === "15" || x + y === "73")
    return (
      <div className="tile-container">
        <img src={oneFive} alt="" className="tile" />
      </div>
    );
  else if (x + y === "16" || x + y === "72")
    return (
      <div className="tile-container">
        <img src={oneSix} alt="" className="tile" />
      </div>
    );
  else if (x + y === "18")
    return (
      <div className="tile-container">
        <img src={oneEight} alt="" className="tile" />
      </div>
    );
  else if (x + y === "20" || x + y === "68")
    return (
      <div className="tile-container">
        <img src={twoZero} alt="" className="tile" />
      </div>
    );
  else if (x + y === "21" || x + y === "67")
    return (
      <div className="tile-container">
        <img src={twoOne} alt="" className="tile" />
      </div>
    );
  else if (x + y === "23" || x + y === "65")
    return (
      <div className="tile-container">
        <img src={twoThree} alt="" className="tile" />
      </div>
    );
  else if (x + y === "24" || x + y === "64")
    return (
      <div className="tile-container">
        <img src={twoFour} alt="" className="tile" />
      </div>
    );
  else if (x + y === "25" || x + y === "63")
    return (
      <div className="tile-container">
        <img src={twoFive} alt="" className="tile" />
      </div>
    );
  else if (x + y === "27" || x + y === "61")
    return (
      <div className="tile-container">
        <img src={twoSeven} alt="" className="tile" />
      </div>
    );
  else if (x + y === "28" || x + y === "60")
    return (
      <div className="tile-container">
        <img src={twoEight} alt="" className="tile" />
      </div>
    );
  else if (x + y === "30" || x + y === "58")
    return (
      <div className="tile-container">
        <img src={threeZero} alt="" className="tile" />
      </div>
    );
  else if (x + y === "31" || x + y === "57")
    return (
      <div className="tile-container">
        <img src={threeOne} alt="" className="tile" />
      </div>
    );
  else if (x + y === "32" || x + y === "56")
    return (
      <div className="tile-container">
        <img src={threeTwo} alt="" className="tile" />
      </div>
    );
  else if (x + y === "34" || x + y === "54")
    return (
      <div className="tile-container">
        <img src={threeFour} alt="" className="tile" />
      </div>
    );
  else if (x + y === "36" || x + y === "52")
    return (
      <div className="tile-container">
        <img src={threeSix} alt="" className="tile" />
      </div>
    );
  else if (x + y === "37" || x + y === "51")
    return (
      <div className="tile-container">
        <img src={threeSeven} alt="" className="tile" />
      </div>
    );
  else if (x + y === "38" || x + y === "50")
    return (
      <div className="tile-container">
        <img src={threeEight} alt="" className="tile" />
      </div>
    );
  else if (x + y === "40" || x + y === "48")
    return (
      <div className="tile-container">
        <img src={fourZero} alt="" className="tile" />
      </div>
    );
  else if (x + y === "41" || x + y === "47")
    return (
      <div className="tile-container">
        <img src={fourOne} alt="" className="tile" />
      </div>
    );
  else if (x + y === "42" || x + y === "46")
    return (
      <div className="tile-container">
        <img src={fourTwo} alt="" className="tile" />
      </div>
    );
  else if (x + y === "43" || x + y === "45")
    return (
      <div className="tile-container">
        <img src={fourThree} alt="" className="tile" />
      </div>
    );
  else if (x + y === "44")
    return (
      <div className="tile-container">
        <img src={fourFour} alt="" className="tile" />
      </div>
    );
  else if (x + y === "70")
    return (
      <div className="tile-container">
        <img src={sevenZero} alt="" className="tile" />
      </div>
    );
  else if (x + y === "78")
    return (
      <div className="tile-container">
        <img src={sevenEight} alt="" className="tile" />
      </div>
    );
  else
    return (
      <div className="tile-container">
        <img src={eightFour} alt="" className="tile" />
      </div>
    );
}
