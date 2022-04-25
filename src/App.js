import "./App.css";
import React from "react";
import Gameboard from "./components/Gameboard";
import DiceFunction from "./components/Dice";

function App() {
  return (
    <div className="app">
      <div className="gamesize">
        <Gameboard />
      </div>
      <div className="dice">
        <DiceFunction />
      </div>
      <div className="tokens"></div>
    </div>
  );
}

export default App;
