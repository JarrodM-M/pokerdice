import './Dice.css'
import React, { useState, useEffect, useCallback } from 'react'
import dicepicOne from '../assets/images/die1.png'
import dicepicTwo from '../assets/images/die2.png'
import dicepicThree from '../assets/images/die3.png'
import dicepicFour from '../assets/images/die4.png'
import dicepicFive from '../assets/images/die5.png'
import dicepicSix from '../assets/images/die6.png'

const useToggle = (initialState) => {
    const [isToggled, setIsToggled] = useState(initialState);
      
        
    const toggle = useCallback(
        () => setIsToggled(state => !state),
        [setIsToggled],
    );
      
    return [isToggled, toggle];
}



export default function DiceFunction(){

    const roll = () => Math.floor(Math.random() * 6 ) + 1
    
    
    const [diceOne, setDiceOne] = useState(roll)
    const [diceTwo, setDiceTwo] = useState(roll)
    const [diceThree, setDiceThree] = useState(roll)
    const [diceFour, setDiceFour] = useState(roll)
    const [diceFive, setDiceFive] = useState(roll)

    const [diceImageOne, setDiceImageOne] = useState(dicepicOne)
    const [diceImageTwo, setDiceImageTwo] = useState(dicepicOne)
    const [diceImageThree, setDiceImageThree] = useState(dicepicOne)
    const [diceImageFour, setDiceImageFour] = useState(dicepicOne)
    const [diceImageFive, setDiceImageFive] = useState(dicepicOne)

    const [isToggledOne, toggleOne] = useToggle(false)
    
    

    function handleRoll() {

        if (isToggledOne == false) setDiceOne(roll)
        else (setDiceOne(prev => prev) )
        
        setDiceTwo(roll)
        setDiceThree(roll)
        setDiceFour(roll)
        setDiceFive(roll)

        setDiceImageOne(imageSelector(diceOne))
        setDiceImageTwo(imageSelector(diceTwo))
        setDiceImageThree(imageSelector(diceThree))
        setDiceImageFour(imageSelector(diceFour))
        setDiceImageFive(imageSelector(diceFive))

        const diceArray =[diceOne, diceTwo, diceThree, diceFour, diceFive]
        console.log(diceArray)
        
    }
    

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
                <div className='dice'><img className= 'dice-image' src={diceImageTwo} /></div>
                <div className='dice'><img className= 'dice-image' src={diceImageThree} /></div>
                <div className='dice'><img className= 'dice-image' src={diceImageFour} /></div>
                <div className='dice'><img className= 'dice-image' src={diceImageFive} /></div>
            </div>
        </>
    )
}
