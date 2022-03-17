import './Tile.css';
import straight from '../assets/images/board/00.png'
import { Board } from "./Gameboard"

/*<img src="G:\Coding\pokerdice\src\assets\images\board\00.png"></img>*/

export default function Tile({x}) { 
    return (
        <div >
            <img src={straight} className='tile' /> 
        </div>
    )};

    