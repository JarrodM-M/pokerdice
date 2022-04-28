import "./App.css";
import React from "react";
import Gameboard from "./components/Gameboard";
import DiceFunction from "./components/Dice";

function App() {
  return (
    <DiceValueContext.Provider value={{ value, setValue }}>
      <div className="app">
        <div className="gamesize">
          <Gameboard />
        </div>
        <div className="dice">
          <DiceFunction />
        </div>
        <div className="tokens"></div>
      </div>
    </DiceValueContext.Provider>
  );
}

export default App;
