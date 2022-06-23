import "./App.css";
import React, { useReducer, useState } from "react";
import Gameboard from "./components/Gameboard";
import DiceFunction from "./components/Dice";
import PlayerModel from "./components/PlayerModel";

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

const handleSelection = (
  isTileOpen,
  owner,
  player,
  reset,
  playerChange,
  rollCount
) => {
  if (isTileOpen === true) {
    owner = { player };
    reset();
    playerChange();
    rollCount(0);
  }
};

function App() {
  const [diceRoll, dispatch] = useReducer(diceReducer, initialDiceValue);

  // sets the initial player state as red-player, for now
  const [playerState, setPlayerState] = useState("red");

  const [isTileOpen, setIsTileOpen] = useState(false);

  const [rollCount, setRollCount] = useState(0);

  return (
    <div className="app">
      <div className="title">Poker Dice</div>
      <div className="settings-rules">S R</div>
      <div className="gameboard-container">
        <Gameboard
          dice={[
            diceRoll.diceOne,
            diceRoll.diceTwo,
            diceRoll.diceThree,
            diceRoll.diceFour,
            diceRoll.diceFive
          ]}
          playerState={playerState}
          setPlayerState={setPlayerState}
          isTileOpen={isTileOpen}
          setIsTileOpen={setIsTileOpen}
          dispatch={dispatch}
          handleSelection={handleSelection}
          setRollCount={setRollCount}
        />
      </div>
      <div className="player-token">
        <div className="player-icon">
          <PlayerModel classColor={playerState} />
        </div>
        <div className="tokens"></div>
      </div>
      <DiceFunction
        setPlayerState={setPlayerState}
        playerState={playerState}
        diceRoll={diceRoll}
        dispatch={dispatch}
        rollCount={rollCount}
        setRollCount={setRollCount}
      />
    </div>
  );
}

export default App;
