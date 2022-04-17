import "./Dice.css";
import React, { useState, useReducer} from "react";
// import dicepicOne from '../assets/images/die1.png'
// import dicepicTwo from '../assets/images/die2.png'
// import dicepicThree from '../assets/images/die3.png'
// import dicepicFour from '../assets/images/die4.png'
// import dicepicFive from '../assets/images/die5.png'
// import dicepicSix from '../assets/images/die6.png'
import useToggle from "./Toggle";
import DiceModel from "./DiceModel";

// function for rolling a number 1-6 which represents a Die rolling
const roll = () => Math.floor(Math.random() * 6) + 1;

// reducer function for controlling the number of times the roll button is clicked and reseting it back to 0
const initialRollCount = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "reset":
      return initialRollCount;
    default:
      return state;
  }
};

// function that handles what image to assign based on the value of the die
// function imageSelector (number){
//     if ( number === 2) return dicepicTwo
//     if ( number === 3) return dicepicThree
//     if ( number === 4) return dicepicFour
//     if ( number === 5) return dicepicFive
//     if ( number === 6) return dicepicSix
//     return dicepicOne
// }

export default function DiceFunction() {


  // sets state of each Die and calls a different roll function for each
  const [diceOne, setDiceOne] = useState("");
  const [diceTwo, setDiceTwo] = useState("");
  const [diceThree, setDiceThree] = useState("");
  const [diceFour, setDiceFour] = useState("");
  const [diceFive, setDiceFive] = useState("");

  // call the custom toggle hook and assigns it to a variable and gives it an inital state of false. Used in onClick
  const [isToggledOne, toggleOne, setToggleOne] = useToggle(false);
  const [isToggledTwo, toggleTwo, setToggleTwo] = useToggle(false);
  const [isToggledThree, toggleThree, setToggleThree] = useToggle(false);
  const [isToggledFour, toggleFour, setToggleFour] = useToggle(false);
  const [isToggledFive, toggleFive, setToggleFive] = useToggle(false);

  const [rollCount, dispatch] = useReducer(reducer, initialRollCount);

  const [resetDice, setResetDice] = useState()


  const getClickOne = click => {
    setToggleOne(click);
  };
  const getClickTwo = click => {
    setToggleTwo(click);
  };
  const getClickThree = click => {
    setToggleThree(click);
  };
  const getClickFour = click => {
    setToggleFour(click);
  };
  const getClickFive = click => {
    setToggleFive(click);
  };

  const resetAll = () => {
    setToggleOne(false);
    setToggleTwo(false);
    setToggleThree(false);
    setToggleFour(false);
    setToggleFive(false);
    setDiceOne("");
    setDiceTwo("");
    setDiceThree("");
    setDiceFour("");
    setDiceFive("");
  };


  // Function used in handleRoll takes in the state of toggled dice and setStates of dice roll and it's image
  // Will only setState of the Die and it's corresponding image if toggleValue = false (is not toggled),
  const setRoll = (toggleValue, setDice) => {
    if (!toggleValue) {
      const rolledValue = roll();
      setDice(rolledValue);
    }
  };

  // function that handles what happens when the button is clicked to roll the dice
  function handleRoll() {
    setRoll(isToggledOne, setDiceOne);
    setRoll(isToggledTwo, setDiceTwo);
    setRoll(isToggledThree, setDiceThree);
    setRoll(isToggledFour, setDiceFour);
    setRoll(isToggledFive, setDiceFive);

    // Counts number of times dice have been rollednpm
    dispatch("increment");
  }

  return (
    <>
      <div id="dice-container">
        <DiceModel
          number={diceOne}
          toggleFunc={getClickOne}
          resetFunc={setResetDice}
          resetValue={isToggledOne}
        />
        <DiceModel
          number={diceTwo}
          toggleFunc={getClickTwo}
          resetFunc={setResetDice}
          resetValue={isToggledTwo}
        />
        <DiceModel
          number={diceThree}
          toggleFunc={getClickThree}
          resetFunc={setResetDice}
          resetValue={isToggledThree}
          />
        <DiceModel
          number={diceFour}
          toggleFunc={getClickFour}
          resetFunc={setResetDice}
          resetValue={isToggledFour}
          />
        <DiceModel
          number={diceFive}
          toggleFunc={getClickFive}
          resetFunc={setResetDice}
          resetValue={resetDice}
          />
      </div>
      <div className="buttonDiv">
        <button id="diceButton" onClick={handleRoll} disabled={rollCount >= 3}>
          roll
        </button>
        <button
          id="diceButton"
          onClick={() => {
            dispatch("reset");
            resetAll();
            setResetDice(false);
            
            // setToggleOne(false);
            // setToggleOne(false);
            // toggleThree(false);
            // toggleFour(false);
            // toggleFive(false);
          }}
        >
          reset
        </button>
      </div>

      {/* <div className="dice-container">
        <div className='dice' onClick={toggleOne}> <img className= {toggleClass(isToggledOne)} alt='' src={diceImageOne} /> </div>
        <div className='dice' onClick={toggleTwo}><img className= {toggleClass(isToggledTwo)}  alt='' src={diceImageTwo} /></div>
        <div className='dice' onClick={toggleThree}><img className= {toggleClass(isToggledThree)} alt='' src={diceImageThree} /></div>
        <div className='dice' onClick={toggleFour}><img className= {toggleClass(isToggledFour)}  alt='' src={diceImageFour} /></div>
        <div className='dice' onClick={toggleFive}><img className= {toggleClass(isToggledFive)}  alt='' src={diceImageFive} /></div> 
      </div> */}
    </>
  );
}
