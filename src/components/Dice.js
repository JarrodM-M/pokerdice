import './Dice.css'
import React, { useState, useReducer, useCallback } from 'react'
import dicepicOne from '../assets/images/die1.png'
import dicepicTwo from '../assets/images/die2.png'
import dicepicThree from '../assets/images/die3.png'
import dicepicFour from '../assets/images/die4.png'
import dicepicFive from '../assets/images/die5.png'
import dicepicSix from '../assets/images/die6.png'


// custom hook to toggle true and false used to tell the handleRoll function if the toggled Die get's rolled again or if it's value is kept
const useToggle = (initialState) => {
    const [isToggled, setIsToggled] = useState(initialState);
      
        
    const toggle = useCallback(
        () => setIsToggled(state => !state),
        [setIsToggled],
    );
      
    return [isToggled, toggle];
}

const initialRollCount = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'reset':
            return initialRollCount
        default:
            return state
    }
        
}

export default function DiceFunction(){

    // function for rolling a number 1-6 which represents a Die rolling
    const roll = () => Math.floor(Math.random() * 6 ) + 1
 
    // sets state of each Die and calls a different roll function for each
    const [diceOne, setDiceOne] = useState('')
    const [diceTwo, setDiceTwo] = useState('')
    const [diceThree, setDiceThree] = useState('')
    const [diceFour, setDiceFour] = useState('')
    const [diceFive, setDiceFive] = useState('')

    //sets state for the die image shown before a roll has happened
    const [diceImageOne, setDiceImageOne] = useState(dicepicOne)
    const [diceImageTwo, setDiceImageTwo] = useState(dicepicOne)
    const [diceImageThree, setDiceImageThree] = useState(dicepicOne)
    const [diceImageFour, setDiceImageFour] = useState(dicepicOne)
    const [diceImageFive, setDiceImageFive] = useState(dicepicOne)

    // call the custom toggle hook and assigns it to a variable and gives it an inital state of false. Used in onClick
    const [isToggledOne, toggleOne] = useToggle(false)
    const [isToggledTwo, toggleTwo] = useToggle(false)
    const [isToggledThree, toggleThree] = useToggle(false)
    const [isToggledFour, toggleFour] = useToggle(false)
    const [isToggledFive, toggleFive] = useToggle(false)

    // set number of times the roll button can be clicked before changing the player
    //const [rollCount, setRollCount] = useState(0)

    const [rollCount, dispatch] = useReducer(reducer, initialRollCount)
    
    const diceArray =[diceOne, diceTwo, diceThree, diceFour, diceFive]
        
    console.log(diceArray)
    console.log('Number of rolls:'+ rollCount)

    // function that handles what happens when the button is clicked to roll the dice
    function handleRoll() {

        // passes in the boolean value for the toggle and the sets the State of the dice when rolled
        setRoll( isToggledOne, setDiceOne, setDiceImageOne)
        setRoll( isToggledTwo, setDiceTwo, setDiceImageTwo)
        setRoll( isToggledThree, setDiceThree, setDiceImageThree)
        setRoll( isToggledFour, setDiceFour, setDiceImageFour)
        setRoll( isToggledFive, setDiceFive, setDiceImageFive)

        // Counts number of times dice have been rollednpm
        dispatch('increment')
    }


    // function that takes in the toggled status of die (prop) and the setState function of the die (propFunc)  
    // Tells the setState to roll if the toggled state is false, 
    const setRoll = (toggleValue, setDice, setDiceImage) => {
        if (!toggleValue){
            const rolledValue = roll();
            setDice(rolledValue);
            setDiceImage(imageSelector(rolledValue));  
        }
    }

    // function that handles what image to assign based on the value of the die
    function imageSelector (number){
            if ( number == 1) return dicepicOne
            if ( number == 2) return dicepicTwo
            if ( number == 3) return dicepicThree
            if ( number == 4) return dicepicFour
            if ( number == 5) return dicepicFive
            return dicepicSix
    }
    
    return(
        <> 
            <div className='buttonDiv'>
                <button id='diceButton' onClick={handleRoll} disabled={rollCount >= 3}>
                roll
                </button>
                <button id='diceButton' onClick={()=>dispatch('reset')}>
                reset
                </button>
            </div>
            <div className='dice-container'>
                <div className='dice' onClick={toggleOne}> <img className= 'dice-image' src={diceImageOne} /> </div>
                <div className='dice' onClick={toggleTwo}><img className= 'dice-image' src={diceImageTwo} /></div>
                <div className='dice' onClick={toggleThree}><img className= 'dice-image' src={diceImageThree} /></div>
                <div className='dice' onClick={toggleFour}><img className= 'dice-image' src={diceImageFour} /></div>
                <div className='dice' onClick={toggleFive}><img className= 'dice-image' src={diceImageFive} /></div>
            </div>
        </>
    )
}
