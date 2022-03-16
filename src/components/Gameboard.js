import React from 'react';
import Tile from './Tile'
import './Gameboard.css';

const verticalAxis = ['0', '1', '2', '3', '4', '5', '6', '7', '8']; 
const horizontalAxis = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];


export default function Gameboard() {
    const board = horizontalAxis.map((x) => (
        verticalAxis.map((y) => (
            <div key = {x + y}>
                <Tile />
            </div>))
    ));


    return(
            <div id ='gameboard'>
                {board};
                {console.log(board)}
            </div>
    );
}
