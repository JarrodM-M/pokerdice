import "./App.css";
import React from "react";
import Gameboard from "./components/Gameboard";
import DiceFunction from "./components/Dice";

function App() {
  return (
    <div id="app">
      <div id="gamesize">
        <Gameboard />
      </div>
      <div id="dice">
        <DiceFunction />
      </div>
      <div id="tokens"></div>
    </div>
  );
}

export default App;
