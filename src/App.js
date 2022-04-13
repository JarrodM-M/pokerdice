import './App.css';
import React from 'react';
import Gameboard from './components/Gameboard';
import DiceModel from './components/DiceModel';
import DiceFunction from './components/Dice';

function App() {
  return (
    <div id="app">

      <Gameboard />
      {/* <DiceFunction /> */}
      <div id = 'dice-container'>
        <DiceModel />
        <DiceModel />
        <DiceModel />
        <DiceModel />
        <DiceModel />
      </div>  

    </div>
  );
}

export default App;
