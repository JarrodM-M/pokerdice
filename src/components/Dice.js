import './Dice.css'
import React, { useState, useEffect, useCallback } from 'react'
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

export default function DiceFunction(){

    // function for rolling a number 1-6 which represents a Die rolling
    const roll = () => Math.floor(Math.random() * 6 ) + 1
    
    // sets state of each Die and calls a different roll function for each
    const [diceOne, setDiceOne] = useState(roll())
    const [diceTwo, setDiceTwo] = useState(roll())
    const [diceThree, setDiceThree] = useState(roll())
    const [diceFour, setDiceFour] = useState(roll())
    const [diceFive, setDiceFive] = useState(roll())

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
    
    console.log('toggle1:'+ isToggledOne)
    console.log('toggle2:'+ isToggledTwo)
    console.log('toggle3:'+ isToggledThree)
    console.log('toggle4:'+ isToggledFour)
    console.log('toggle5:'+ isToggledFive)

    

    // function that handles what happens when the button is clicked to roll the dice
    function handleRoll() {

        /* if (isToggledOne == false) setDiceOne(roll)
        else (setDiceOne(prev => prev) ) */
        
        // passes in the boolean value for the toggle and the sets the State of the dice when rolled
        setRoll( isToggledOne, setDiceOne)
        setRoll( isToggledTwo, setDiceTwo)
        setRoll( isToggledThree, setDiceThree)
        setRoll( isToggledFour, setDiceFour)
        setRoll( isToggledFive, setDiceFive)


        // calls the imageSelector function and sets the state of the image of the dice based on it's value after it's been rolled
        setDiceImageOne(imageSelector(diceOne))
        setDiceImageTwo(imageSelector(diceTwo))
        setDiceImageThree(imageSelector(diceThree))
        setDiceImageFour(imageSelector(diceFour))
        setDiceImageFive(imageSelector(diceFive))

        const diceArray =[diceOne, diceTwo, diceThree, diceFour, diceFive]
        console.log(diceArray)
        
    }

    // function that takes in the toggled status of die (prop) and the setState function of the die (propFunc)  
    // Tells the setState to roll if the toggled state is false or to keep it's last roll if the toggled state is true
    // **issue maybe here. after toggle occurs the roll doesn't update until the next roll. maybe useEffect here to fix?? 
    const setRoll = (prop, propFunc) => {
        if (prop == false) propFunc(roll) 
        else (propFunc(prev => prev))
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
                <button id='diceButton' onClick={handleRoll}>
                roll
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
