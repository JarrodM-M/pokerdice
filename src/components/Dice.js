import "./Dice.css";
import React, { useState } from "react";
import DiceModel from "./DiceModel";
import PlayerModel from "./PlayerModel";

// reducer function for controlling the number of times the roll button is clicked and reseting it back to 0
const showRollCount = number => {
  switch (number) {
    case 0:
      return "First Roll";
    case 1:
      return "Second Roll";
    case 2:
      return "Final Roll";
    default:
      return "Next Turn";
  }
};

const handlePlayerStateChange = (state, setState) => {
  state === "red" ? setState("blue") : setState("red");
};

export default function DiceFunction({
  diceRoll: { diceOne, diceTwo, diceThree, diceFour, diceFive, toggled },
  dispatch
}) {
  const toggle = index => {
    const newToggle = [...toggled];
    newToggle[index] = !newToggle[index];
    dispatch({ type: "toggle", toggled: newToggle });
  };

  // for the Use Reducer state
  const [rollCount, setRollCount] = useState(0);

  // sets the initial player state as red-player, for now
  const [playerState, setPlayerState] = useState("red");

  //setting up object to map into the <DiceModel />
  const diceModelProps = [
    {
      number: diceOne,
      toggleFunc: () => toggle(0),
      toggleState: toggled[0],
      delay: 500,
      key: "diceOneKey"
    },
    {
      number: diceTwo,
      toggleFunc: () => toggle(1),
      toggleState: toggled[1],
      delay: 600,
      key: "diceTwoKey"
    },
    {
      number: diceThree,
      toggleFunc: () => toggle(2),
      toggleState: toggled[2],
      delay: 700,
      key: "diceThreeKey"
    },
    {
      number: diceFour,
      toggleFunc: () => toggle(3),
      toggleState: toggled[3],
      delay: 800,
      key: "diceFourKey"
    },
    {
      number: diceFive,
      toggleFunc: () => toggle(4),
      toggleState: toggled[4],
      delay: 900,
      key: "diceFiveKey"
    }
  ];

  // Resets the values and toggle selection on all dice. For use to start a new turn
  const resetAll = () => dispatch({ type: "resetAll" });

  // function that handles what happens when the button is clicked to roll the dice
  function handleRoll() {
    dispatch({ type: "roll" });
    setRollCount(rollCount + 1);
  }

  return (
    <>
      <div className="dice-container">
        {diceModelProps.map(props => {
          return (
            <div className="dice-block">
              <DiceModel {...props} key={props.key} />
            </div>
          );
        })}
      </div>
      <div className="buttonDiv">
        <button
          className="diceButton"
          onClick={handleRoll}
          // disabled={rollCount >= 3}
        >
          {showRollCount(rollCount)}
        </button>
        <button
          className="diceButton"
          onClick={() => {
            setRollCount(0);
            resetAll();
            handlePlayerStateChange(playerState, setPlayerState);
          }}
        >
          reset
        </button>
      </div>
      <div>
        <PlayerModel classColor={playerState} />
      </div>
    </>
  );
}
