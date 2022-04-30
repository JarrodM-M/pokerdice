import "./Dice.css";
import React, { useState, useReducer } from "react";
import useToggle from "./Toggle";
import DiceModel from "./DiceModel";
import PlayerModel from "./PlayerModel";

// function for rolling a number 1-6 which represents a Die rolling
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

  // Resets the values and toggle selection on all dice. For use to start a new turn
  const resetAll = () => {
    setToggleOne(false);
    setToggleTwo(false);
    setToggleThree(false);
    setToggleFour(false);
    setToggleFive(false);
    resetDice();
    // setDiceOne(null);
    // setDiceTwo(null);
    // setDiceThree(null);
    // setDiceFour(null);
    // setDiceFive(null);
  };

  // Function used in handleRoll takes in the state of toggled dice and setStates of dice roll and it's image
  // Will only setState of the Die and it's corresponding image if toggleValue = false (is not toggled),
  const setRoll = (toggleValue, setDice) => {
    if (!toggleValue) {
      //setDice(null);
      //const rolledValue = roll();
      setTimeout(function() {
        setDice();
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
        <div className="dice-block">
          <DiceModel
            number={diceOne} // passes rolled number to the function in DiceModel that handles which dice face to show
            toggleFunc={setToggleOne} // sends the function that sets toggleState to the onClick of the DiceModel
            toggleState={isToggledOne} // current state of the toggleValue
          />
        </div>
        <div className="dice-block">
          <DiceModel
            number={diceTwo}
            toggleFunc={setToggleTwo}
            toggleState={isToggledTwo}
          />
        </div>
        <div className="dice-block">
          <DiceModel
            number={diceThree}
            toggleFunc={setToggleThree}
            toggleState={isToggledThree}
          />
        </div>
        <div className="dice-block">
          <DiceModel
            number={diceFour}
            toggleFunc={setToggleFour}
            toggleState={isToggledFour}
          />
        </div>
        <div className="dice-block">
          <DiceModel
            number={diceFive}
            toggleFunc={setToggleFive}
            toggleState={isToggledFive}
          />
        </div>
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
