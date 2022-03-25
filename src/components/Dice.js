import './Dice.css'
import React, { useState, useEffect } from 'react'
import dicepicOne from '../assets/images/die1.png'
import dicepicTwo from '../assets/images/die2.png'
import dicepicThree from '../assets/images/die3.png'
import dicepicFour from '../assets/images/die4.png'
import dicepicFive from '../assets/images/die5.png'
import dicepicSix from '../assets/images/die6.png'



const roll = () => 
    Math.floor(Math.random() * 6 ) + 1



export default function DiceFunction(){
    
    const [diceOne, setDiceOne] = useState('')
    const [diceTwo, setDiceTwo] = useState('')
    const [diceThree, setDiceThree] = useState('')
    const [diceFour, setDiceFour] = useState('')
    const [diceFive, setDiceFive] = useState('')

    const handleRoll = () =>{ 
        setDiceOne(roll)
        setDiceTwo(roll)
        setDiceThree(roll)
        setDiceFour(roll)
        setDiceFive(roll)

    }

    const [diceImageOne, setDiceImageOne] = useState({dicepicOne})

    const imageSelector = () => {
        setDiceImageOne(()=>{
            if ( diceOne == 1)
            return dicepicOne
        })

    }

    return(
        <> 
            <div className='buttonDiv'>
                <button id='diceButton' onClick={handleRoll}>
                roll
                </button>
            </div>
            <div className='dice-container'>
                <div className='dice'> <img className= 'dice-image' src={diceImageOne} /> </div>
                <div className='dice'>{diceTwo}</div>
                <div className='dice'>{diceThree}</div>
                <div className='dice'>{diceFour}</div>
                <div className='dice'>{diceFive}</div>
            </div>
        </>
    )
}
