import "./App.css";
import React, { createContext, useState } from "react";
import Gameboard from "./components/Gameboard";
import DiceFunction from "./components/Dice";

export const DiceValueContext = createContext({
  value: null,
  setValue: () => {}
});

function App() {
  const [value, setValue] = useState(null);

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
