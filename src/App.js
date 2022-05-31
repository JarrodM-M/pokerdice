import "./App.css";
import React, { useReducer } from "react";
import Gameboard from "./components/Gameboard";
import DiceFunction from "./components/Dice";

const roll = () => Math.floor(Math.random() * 6) + 1;

const initialDiceValue = {
  toggled: [false, false, false, false, false],
  diceOne: null,
  diceTwo: null,
  diceThree: null,
  diceFour: null,
  diceFive: null
};

const diceReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return {
        ...state,
        toggled: action.toggled
      };
    case "roll":
      return {
        ...state,
        diceOne: !state.toggled[0] ? roll() : state.diceOne,
        diceTwo: !state.toggled[1] ? roll() : state.diceTwo,
        diceThree: !state.toggled[2] ? roll() : state.diceThree,
        diceFour: !state.toggled[3] ? roll() : state.diceFour,
        diceFive: !state.toggled[4] ? roll() : state.diceFive
      };
    case "resetAll":
      return initialDiceValue;
    default:
      throw new Error(`Invalid state ${state}`);
  }
};

function App() {
  const [diceRoll, dispatch] = useReducer(diceReducer, initialDiceValue);

  return (
    <div className="app">
      <Gameboard
        dice={[
          diceRoll.diceOne,
          diceRoll.diceTwo,
          diceRoll.diceThree,
          diceRoll.diceFour,
          diceRoll.diceFive
        ]}
      />
      <DiceFunction diceRoll={diceRoll} dispatch={dispatch} />
      <div className="tokens"></div>
    </div>
  );
}

export default App;
