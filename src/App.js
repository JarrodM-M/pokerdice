import "./App.css";
import React, { useReducer, useState } from "react";
import Gameboard from "./components/Gameboard";
import DiceFunction from "./components/Dice";

const initialDiceValue = {
  diceOne: null,
  diceTwo: null,
  diceThree: null,
  diceFour: null,
  diceFive: null
};

const diceReducer = (state, action) => {
  switch (action.type) {
    case "setDiceOne":
      return { ...state, diceOne: action.payload };
    case "setDiceTwo":
      return { ...state, diceTwo: action.payload };
    case "setDiceThree":
      return { ...state, diceThree: action.payload };
    case "setDiceFour":
      return { ...state, diceFour: action.payload };
    case "setDiceFive":
      return { ...state, diceFive: action.payload };
    case "resetAll":
      return initialDiceValue;
    default:
      return state;
  }
};

function App() {
  const [diceRoll, dispatch] = useReducer(diceReducer, initialDiceValue);

  const allDice = [
    diceRoll.diceOne,
    diceRoll.diceTwo,
    diceRoll.diceThree,
    diceRoll.diceFour,
    diceRoll.diceFive
  ];

  return (
    <div className="app">
      <div className="gamesize">
        <Gameboard dice={allDice} />
      </div>
      <div className="dice">
        <DiceFunction
          resetDice={() => dispatch({ type: "resetAll" })}
          setDiceOne={x => dispatch({ type: "setDiceOne", payload: x })}
          diceOne={diceRoll.diceOne}
          setDiceTwo={x => dispatch({ type: "setDiceTwo", payload: x })}
          diceTwo={diceRoll.diceTwo}
          setDiceThree={x => dispatch({ type: "setDiceThree", payload: x })}
          diceThree={diceRoll.diceThree}
          setDiceFour={x => dispatch({ type: "setDiceFour", payload: x })}
          diceFour={diceRoll.diceFour}
          setDiceFive={x => dispatch({ type: "setDiceFive", payload: x })}
          diceFive={diceRoll.diceFive}
        />
      </div>
      <div className="tokens"></div>
    </div>
  );
}

export default App;
