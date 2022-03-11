import React from 'react';
import './Gameboard.css';

const verticalAxis = ['0', '1', '2', '3', '4', '5', '6', '7', '8']; 
const horizontalAxis = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

/*const boardArray = horizontalAxis.map((x) => (
    verticalAxis.map((y) => (
        board.push([y + x])))
))*/

export default function Gameboard() {
    const board = horizontalAxis.map((x) => (
        verticalAxis.map((y) => (
            <div className='tile' key= {x+y}>
                [{x + y}]
            </div>))
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
