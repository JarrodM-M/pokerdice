import "./Dice.css";
import React, { useState, useReducer } from "react";
import useToggle from "./Toggle";
import DiceModel from "./DiceModel";
import PlayerModel from "./PlayerModel";

const roll = () => Math.floor(Math.random() * 6) + 1;

// reducer function for controlling the number of times the roll button is clicked and reseting it back to 0
const initialRollCount = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "reset":
      return initialRollCount;
    default:
      return state;
  }
};

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
  diceOne,
  setDiceOne,
  diceTwo,
  setDiceTwo,
  diceThree,
  setDiceThree,
  diceFour,
  setDiceFour,
  diceFive,
  setDiceFive,
  resetDice
}) {
  // sets state of each Die and calls a different roll function for each
  // const [diceOne, setDiceOne] = useState(null);
  // const [diceTwo, setDiceTwo] = useState(null);
  // const [diceThree, setDiceThree] = useState(null);
  // const [diceFour, setDiceFour] = useState(null);
  // const [diceFive, setDiceFive] = useState(null);

  // call the custom toggle hook and assigns it to a variable and gives it an inital state of false. Used in onClick
  const [isToggledOne, setToggleOne] = useToggle(false);
  const [isToggledTwo, setToggleTwo] = useToggle(false);
  const [isToggledThree, setToggleThree] = useToggle(false);
  const [isToggledFour, setToggleFour] = useToggle(false);
  const [isToggledFive, setToggleFive] = useToggle(false);

  // for the Use Reducer state
  const [rollCount, dispatch] = useReducer(reducer, initialRollCount);

  // sets the initial player state as red-player, for now
  const [playerState, setPlayerState] = useState("red");

  //setting up object to map into the <DiceModel />
  const diceModelProps = [
    { prop1: diceOne, prop2: setToggleOne, prop3: isToggledOne },
    { prop1: diceTwo, prop2: setToggleTwo, prop3: isToggledTwo },
    { prop1: diceThree, prop2: setToggleThree, prop3: isToggledThree },
    { prop1: diceFour, prop2: setToggleFour, prop3: isToggledFour },
    { prop1: diceFive, prop2: setToggleFive, prop3: isToggledFive }
  ];

  // Resets the values and toggle selection on all dice. For use to start a new turn
  const resetAll = () => {
    setToggleOne(false);
    setToggleTwo(false);
    setToggleThree(false);
    setToggleFour(false);
    setToggleFive(false);
    resetDice();
  };

  // Function used in handleRoll takes in the state of toggled dice and setStates of dice roll and it's image
  // Will only setState of the Die and it's corresponding image if toggleValue = false (is not toggled),
  const setRoll = (toggleValue, setDice) => {
    if (!toggleValue) {
      setDice(null);
      const rolledValue = roll();
      setTimeout(function() {
        setDice(rolledValue);
      }, 750);
    }
  };

  // function that handles what happens when the button is clicked to roll the dice
  function handleRoll() {
    setRoll(isToggledOne, setDiceOne);
    setRoll(isToggledTwo, setDiceTwo);
    setRoll(isToggledThree, setDiceThree);
    setRoll(isToggledFour, setDiceFour);
    setRoll(isToggledFive, setDiceFive);
    dispatch("increment");
  }

  return (
    <>
      <div className="dice-container">
        {diceModelProps.map(propInfo => {
          return (
            <div className="dice-block">
              <DiceModel
                number={propInfo.prop1}
                toggleFunc={propInfo.prop2}
                toggleState={propInfo.prop3}
              />
            </div>
          );
        })}
      </div>
      <div className="buttonDiv">
        <button
          className="diceButton"
          onClick={handleRoll}
          disabled={rollCount >= 3}
        >
          {showRollCount(rollCount)}
        </button>
        <button
          className="diceButton"
          onClick={() => {
            dispatch("reset");
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
