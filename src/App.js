import "./App.css";
import React from "react";
import Gameboard from "./components/Gameboard";
import DiceModel from "./components/DiceModel";
import DiceFunction from "./components/Dice";

function App() {
  return (
    <div id="app">
      {/* <div id = 'board'>
        <Gameboard />
      </div> */}

      <DiceFunction />

      {/* <div id='dice-container'>
        <div id='die-container'><DiceModel /></div>
        <div id='die-container'><DiceModel /></div>
        <div id='die-container'><DiceModel /></div>
        <div id='die-container'><DiceModel /></div>
        <div id='die-container'><DiceModel /></div>
      </div> */}
    </div>
  );
}

export default App;
