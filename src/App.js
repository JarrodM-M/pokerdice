import "./App.css";
import React, { useReducer, useState } from "react";
import Gameboard from "./components/Gameboard";
import DiceFunction from "./components/Dice";

const initialDiceValue = {
  allDice: {
    diceOne: null,
    diceTwo: null,
    diceThree: null,
    diceFour: null,
    diceFive: null
  }
};

const diceReducer = (state, action) => {
  switch (action.type) {
    case "setDice":
      return {
        ...state,
        allDice: {
          diceOne: action.payload,
          diceTwo: action.payload,
          diceThree: action.payload,
          diceFour: action.payload,
          diceFive: action.payload
        }
      };
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

  return (
    <div className="app">
      <div className="gamesize">
        <Gameboard dice={[diceRoll.allDice]} />
      </div>
      <div className="dice">
        <DiceFunction
          resetDice={() => dispatch({ type: "resetAll" })}
          setDiceOne={x => dispatch({ type: "setDice", payload: x })}
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
