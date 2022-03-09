import React from 'react';
import './Gameboard.css';

const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; 
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

/*const boardArray = horizontalAxis.map((x) => (
    verticalAxis.map((y) => (
        board.push([y + x])))
))*/

export default function Gameboard() {
    let board = [];

    verticalAxis.map((x) => (
        horizontalAxis.map((y) => (
            board.push(<div className='tile' key= {y+x}>
            [{y + x}]
        </div>)))
    ));

    
    
    /*for (let j = verticalAxis.length-1; j >= 0; j--){
        for(let i = 0; i < horizontalAxis.length; i++){
            board.push(
            <div className='tile'>[{horizontalAxis[i]}{verticalAxis[j]}]</div>)
        }
    }*/

    
    
    return(
       
       /* <div id="gameboard">
            {horizontalAxis.map((x) => (
                verticalAxis.map((y) => (
                    <div className='tile' key= {y+x}>
                        [{y + x}]
                    </div>
                ))
            ))}
            {console.log()}
        </div>*/
        <div id ='gameboard'>
            {board};
            {console.log(board)}
        </div>
        
        
        
    );
}
