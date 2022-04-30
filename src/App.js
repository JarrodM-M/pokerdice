import "./App.css";
import React, { useState, useReducer } from "react";
import Gameboard from "./components/Gameboard";
import DiceFunction from "./components/Dice";

function App() {
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
        return { ...state, diceOne: Math.floor(Math.random() * 6) + 1 };
      case "setDiceTwo":
        return { ...state, diceTwo: Math.floor(Math.random() * 6) + 1 };
      case "setDiceThree":
        return { ...state, diceThree: Math.floor(Math.random() * 6) + 1 };
      case "setDiceFour":
        return { ...state, diceFour: Math.floor(Math.random() * 6) + 1 };
      case "setDiceFive":
        return { ...state, diceFive: Math.floor(Math.random() * 6) + 1 };
      case "reset":
        return initialDiceValue;
      default:
        return state;
    }
  };

  const [diceRoll, dispatch] = useReducer(diceReducer, initialDiceValue);

  return (
    <div className="app">
      <div className="gamesize">
        <Gameboard />
      </div>
      <div className="dice">
        <DiceFunction
          resetDice={() => dispatch({ type: "reset" })}
          setDiceOne={() => dispatch({ type: "setDiceOne" })}
          diceOne={diceRoll.diceOne}
          setDiceTwo={() => dispatch({ type: "setDiceTwo" })}
          diceTwo={diceRoll.diceTwo}
          setDiceThree={() => dispatch({ type: "setDiceThree" })}
          diceThree={diceRoll.diceThree}
          setDiceFour={() => dispatch({ type: "setDiceFour" })}
          diceFour={diceRoll.diceFour}
          setDiceFive={() => dispatch({ type: "setDiceFive" })}
          diceFive={diceRoll.diceFive}
        />
      </div>
      <div className="tokens"></div>
    </div>
  );
}

export default App;
