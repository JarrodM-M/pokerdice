import "./App.css";
import React, { useState } from "react";
import Gameboard from "./components/Gameboard";

function App() {
  const [diceOne, setDiceOne] = useState("poop");
  const [diceTwo, setDiceTwo] = useState(null);
  const [diceThree, setDiceThree] = useState(null);
  const [diceFour, setDiceFour] = useState(null);
  const [diceFive, setDiceFive] = useState(null);

  return (
    <div className="app">
      <div className="gamesize">
        <Gameboard dice={diceOne} />
      </div>
      <div className="dice">{/* <DiceFunction /> */}</div>
      <div className="tokens"></div>
    </div>
  );
}

export default App;
