import "./Dice.css";
import React, { useState, useReducer, useEffect } from "react";
import useToggle from "./Toggle";
import DiceModel from "./DiceModel";

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

const handlePlayerState = (state, setState) => {
  state === "red" ? setState("blue") : setState("red");
};

export default function DiceFunction() {
  // sets state of each Die and calls a different roll function for each
  const [diceOne, setDiceOne] = useState("");
  useEffect(() => {
    console.log(diceOne);
  }, [diceOne]);
  const [diceTwo, setDiceTwo] = useState("");
  useEffect(() => {
    console.log(diceTwo);
  }, [diceTwo]);
  const [diceThree, setDiceThree] = useState("");
  useEffect(() => {
    console.log(diceThree);
  }, [diceThree]);
  const [diceFour, setDiceFour] = useState("");
  useEffect(() => {
    console.log(diceFour);
  }, [diceFour]);
  const [diceFive, setDiceFive] = useState("");
  useEffect(() => {
    console.log(diceFive);
  }, [diceFive]);
  // call the custom toggle hook and assigns it to a variable and gives it an inital state of false. Used in onClick
  const [isToggledOne, setToggleOne] = useToggle(false);
  const [isToggledTwo, setToggleTwo] = useToggle(false);
  const [isToggledThree, setToggleThree] = useToggle(false);
  const [isToggledFour, setToggleFour] = useToggle(false);
  const [isToggledFive, setToggleFive] = useToggle(false);

  // for the Use Reducer state
  const [rollCount, dispatch] = useReducer(reducer, initialRollCount);

  const [playerState, setPlayerState] = useState("red");
  useEffect(() => {
    console.log(playerState);
  }, [playerState]);

  // function passed into DiceModel to handle state when the die get Clicked
  function getClickOne(toggleState) {
    setToggleOne(toggleState);
  }
  const getClickTwo = toggleState => {
    setToggleTwo(toggleState);
  };
  const getClickThree = toggleState => {
    setToggleThree(toggleState);
  };
  const getClickFour = toggleState => {
    setToggleFour(toggleState);
  };
  const getClickFive = toggleState => {
    setToggleFive(toggleState);
  };

  // Resets the values and toggle selection on all dice. For use to start a new turn
  const resetAll = () => {
    setToggleOne(false);
    setToggleTwo(false);
    setToggleThree(false);
    setToggleFour(false);
    setToggleFive(false);
    setDiceOne("");
    setDiceTwo("");
    setDiceThree("");
    setDiceFour("");
    setDiceFive("");
  };

  // Function used in handleRoll takes in the state of toggled dice and setStates of dice roll and it's image
  // Will only setState of the Die and it's corresponding image if toggleValue = false (is not toggled),
  const setRoll = (toggleValue, setDice) => {
    if (!toggleValue) {
      const rolledValue = roll();
      setDice(rolledValue);
    }
  };

  // function that handles what happens when the button is clicked to roll the dice
  function handleRoll() {
    setRoll(isToggledOne, setDiceOne);
    setRoll(isToggledTwo, setDiceTwo);
    setRoll(isToggledThree, setDiceThree);
    setRoll(isToggledFour, setDiceFour);
    setRoll(isToggledFive, setDiceFive);

    // Counts number of times dice have been rollednpm
    dispatch("increment");
  }

  return (
    <>
      <div id="dice-container">
        <div id="dice-block">
          <DiceModel
            number={diceOne} // passes rolled number to the function in DiceModel that handles which dice face to show
            toggleFunc={getClickOne} // sends the function that sets toggleState to the onClick of the DiceModel
            toggleState={isToggledOne} // current state of the toggleValue
          />
        </div>
        <div id="dice-block">
          <DiceModel
            number={diceTwo}
            toggleFunc={getClickTwo}
            toggleState={isToggledTwo}
          />
        </div>
        <div id="dice-block">
          <DiceModel
            number={diceThree}
            toggleFunc={getClickThree}
            toggleState={isToggledThree}
          />
        </div>
        <div id="dice-block">
          <DiceModel
            number={diceFour}
            toggleFunc={getClickFour}
            toggleState={isToggledFour}
          />
        </div>
        <div id="dice-block">
          <DiceModel
            number={diceFive}
            toggleFunc={getClickFive}
            toggleState={isToggledFive}
          />
        </div>
      </div>
      <div className="buttonDiv">
        <button id="diceButton" onClick={handleRoll} disabled={rollCount >= 3}>
          {showRollCount(rollCount)}
        </button>
        <button
          id="diceButton"
          onClick={() => {
            dispatch("reset");
            resetAll();
            handlePlayerState(playerState, setPlayerState);
          }}
        >
          reset
        </button>
      </div>
    </>
  );
}
