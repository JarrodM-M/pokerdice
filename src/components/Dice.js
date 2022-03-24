import './Dice.css'
import React, { useState, useEffect } from 'react'

const roll = () => Math.floor(Math.random() * 6 ) + 1

export default function DiceOne(){
    
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

    return(
        <> 
            <div className='buttonDiv'>
                <button id='diceButton' onClick={handleRoll}>
                roll
                </button>
            </div>
            <div className='dice-container'>
                <div className='dice'>{diceOne}</div>
                <div className='dice'>{diceTwo}</div>
                <div className='dice'>{diceThree}</div>
                <div className='dice'>{diceFour}</div>
                <div className='dice'>{diceFive}</div>
            </div>
        </>
    )
}