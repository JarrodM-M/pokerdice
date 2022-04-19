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
      return "First";
    case 1:
      return "Second";
    case 2:
      return "Final";
  }
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

  const [rollCount, dispatch] = useReducer(reducer, initialRollCount);

  const getClickOne = click => {
    setToggleOne(click);
  };
  const getClickTwo = click => {
    setToggleTwo(click);
  };
  const getClickThree = click => {
    setToggleThree(click);
  };
  const getClickFour = click => {
    setToggleFour(click);
  };
  const getClickFive = click => {
    setToggleFive(click);
  };

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
            number={diceOne}
            toggleFunc={getClickOne}
            resetValue={isToggledOne}
          />
        </div>
        <div id="dice-block">
          <DiceModel
            number={diceTwo}
            toggleFunc={getClickTwo}
            resetValue={isToggledTwo}
          />
        </div>
        <div id="dice-block">
          <DiceModel
            number={diceThree}
            toggleFunc={getClickThree}
            resetValue={isToggledThree}
          />
        </div>
        <div id="dice-block">
          <DiceModel
            number={diceFour}
            toggleFunc={getClickFour}
            resetValue={isToggledFour}
          />
        </div>
        <div id="dice-block">
          <DiceModel
            number={diceFive}
            toggleFunc={getClickFive}
            resetValue={isToggledFive}
          />
        </div>
      </div>
      <div className="buttonDiv">
        <button id="diceButton" onClick={handleRoll} disabled={rollCount >= 3}>
          {showRollCount(rollCount)} Roll
        </button>
        <button
          id="diceButton"
          onClick={() => {
            dispatch("reset");
            resetAll();
          }}
        >
          reset
        </button>
      </div>
    </>
  );
}
