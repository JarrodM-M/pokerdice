import './Tile.css';
import zeroZero from '../assets/images/board/00.png'
import zeroOne from '../assets/images/board/01.png'
import zeroTwo from '../assets/images/board/02.png'
import zeroThree from '../assets/images/board/03.png'
import zeroFour from '../assets/images/board/04.png'
import zeroFive from '../assets/images/board/05.png'
import zeroSix from '../assets/images/board/06.png'
import zeroSeven from '../assets/images/board/07.png'
import zeroEight from '../assets/images/board/08.png'
import oneZero from '../assets/images/board/10.png'
import oneOne from '../assets/images/board/11.png'
import oneTwo from '../assets/images/board/12.png'
import oneThree from '../assets/images/board/13.png'
import oneFour from '../assets/images/board/14.png'
import oneFive from '../assets/images/board/15.png'
import oneSix from '../assets/images/board/16.png'
import oneEight from '../assets/images/board/18.png'
import twoZero from '../assets/images/board/20.png'
import twoOne from '../assets/images/board/21.png'
import twoThree from '../assets/images/board/23.png'
import twoFour from '../assets/images/board/24.png'
import twoFive from '../assets/images/board/25.png'
import twoSeven from '../assets/images/board/27.png'
import twoEight from '../assets/images/board/28.png'
import threeZero from '../assets/images/board/30.png'
import threeOne from '../assets/images/board/31.png'
import threeTwo from '../assets/images/board/32.png'
import threeFour from '../assets/images/board/34.png'
import threeSix from '../assets/images/board/36.png'
import threeSeven from '../assets/images/board/37.png'
import threeEight from '../assets/images/board/38.png'
import fourZero from '../assets/images/board/40.png'
import fourOne from '../assets/images/board/41.png'
import fourTwo from '../assets/images/board/42.png'
import fourThree from '../assets/images/board/43.png'
import fourFour from '../assets/images/board/44.png'
import sevenZero from '../assets/images/board/70.png'
import sevenEight from '../assets/images/board/78.png'
import eightFour from '../assets/images/board/84.png'


/*<img src="G:\Coding\pokerdice\src\assets\images\board\00.png"></img>*/

export default function Tile({x,y}) { 
    if (x + y === '00' || x + y === '88') return (
        <div className='tile-container' >
            <img src={zeroZero} className='tile' /> 
        </div>
    )
    else if (x + y === '01' || x + y === '87') return (
        <div className='tile-container' >
            <img src={zeroOne} className='tile' /> 
        </div>
    )
    else if (x + y === '02' || x + y === '86') return (
        <div className='tile-container' >
            <img src={zeroTwo} className='tile' /> 
        </div>
    )
    else if (x + y === '03' || x + y === '85') return (
        <div className='tile-container' >
            <img src={zeroThree} className='tile' /> 
        </div>
    )
    else if (x + y === '04' ) return (
        <div className='tile-container' >
            <img src={zeroFour} className='tile' /> 
        </div>
    )
    else if (x + y === '05' || x + y === '83') return (
        <div className='tile-container' >
            <img src={zeroFive} className='tile' /> 
        </div>
    )
    else if (x + y === '06' || x + y === '82') return (
        <div className='tile-container' >
            <img src={zeroSix} className='tile' /> 
        </div>
    )
    else if (x + y === '07' || x + y === '81') return (
        <div className='tile-container' >
            <img src={zeroSeven} className='tile' /> 
        </div>
    )
    else if (x + y === '08' || x + y === '80') return (
        <div className='tile-container' >
            <img src={zeroEight} className='tile' /> 
        </div>
    )
    else if (x + y === '10') return (
        <div className='tile-container' >
            <img src={oneZero} className='tile' /> 
        </div>
    )
    else if (x + y === '11' || x + y === '17' || x + y === '22' || x + y === '26' || x + y === '33' || x + y === '35' || x + y === '53' || x + y === '55' || x + y === '62' || x + y === '66'|| x + y === '71'|| x + y === '77') return (
        <div className='tile-container' >
            <img src={oneOne} className='tile' /> 
        </div>
    )
    else if (x + y === '12' || x + y === '76') return (
        <div className='tile-container' >
            <img src={oneTwo} className='tile' /> 
        </div>
    )
    else if (x + y === '13' || x + y === '75') return (
        <div className='tile-container' >
            <img src={oneThree} className='tile' /> 
        </div>
    )
    else if (x + y === '14' || x + y === '74') return (
        <div className='tile-container' >
            <img src={oneFour} className='tile' /> 
        </div>
    )
    else if (x + y === '15' || x + y === '73') return (
        <div className='tile-container' >
            <img src={oneFive} className='tile' /> 
        </div>
    )
    else if (x + y === '16' || x + y === '72') return (
        <div className='tile-container' >
            <img src={oneSix} className='tile' /> 
        </div>
    )
    else if (x + y === '18' || x + y === '71') return (
        <div className='tile-container' >
            <img src={oneEight} className='tile' /> 
        </div>
    )
    else if (x + y === '20' || x + y === '68') return (
        <div className='tile-container' >
            <img src={twoZero} className='tile' /> 
        </div>
    )
    else if (x + y === '21' || x + y === '67') return (
        <div className='tile-container' >
            <img src={twoOne} className='tile' /> 
        </div>
    )
    else if (x + y === '23' || x + y ==='65') return (
        <div className='tile-container' >
            <img src={twoThree} className='tile' /> 
        </div>
    )
    else if (x + y === '24' || x + y === '64') return (
        <div className='tile-container' >
            <img src={twoFour} className='tile' /> 
        </div>
    )
    else if (x + y === '25' || x + y === '63') return (
        <div className='tile-container' >
            <img src={twoFive} className='tile' /> 
        </div>
    )
    else if (x + y === '27' || x + y === '61') return (
        <div className='tile-container' >
            <img src={twoSeven} className='tile' /> 
        </div>
    )
    else if (x + y === '28' || x + y === '60') return (
        <div className='tile-container' >
            <img src={twoEight} className='tile' /> 
        </div>
    )
    else if (x + y === '30' || x + y === '58') return (
        <div className='tile-container' >
            <img src={threeZero} className='tile' /> 
        </div>
    )
    else if (x + y === '31' || x + y === '57') return (
        <div className='tile-container' >
            <img src={threeOne} className='tile' /> 
        </div>
    )
    else if (x + y === '32' || x + y === '56') return (
        <div className='tile-container' >
            <img src={threeTwo} className='tile' /> 
        </div>
    )
    else if (x + y === '34' || x + y === '54') return (
        <div className='tile-container' >
            <img src={threeFour} className='tile' /> 
        </div>
    )
    else if (x + y === '36' || x + y === '52') return (
        <div className='tile-container' >
            <img src={threeSix} className='tile' /> 
        </div>
    )
    else if (x + y === '37' || x + y === '51') return (
        <div className='tile-container' >
            <img src={threeSeven} className='tile' /> 
        </div>
    )
    else if (x + y === '38' || x + y === '50') return (
        <div className='tile-container' >
            <img src={threeEight} className='tile' /> 
        </div>
    )
    else if (x + y === '40' || x + y === '48') return (
        <div className='tile-container' >
            <img src={fourZero} className='tile' /> 
        </div>
    )
    else if (x + y === '41' || x + y === '47') return (
        <div className='tile-container' >
            <img src={fourOne} className='tile' /> 
        </div>
    )
    else if (x + y === '42' || x + y === '46') return (
        <div className='tile-container' >
            <img src={fourTwo} className='tile' /> 
        </div>
    )
    else if (x + y === '43' || x + y === '45') return (
        <div className='tile-container' >
            <img src={fourThree} className='tile' /> 
        </div>
    )
    else if (x + y === '44') return (
        <div className='tile-container' >
            <img src={fourFour} className='tile' /> 
        </div>
    )
    else if (x + y === '70') return (
        <div className='tile-container' >
            <img src={sevenZero} className='tile' /> 
        </div>
    )
    else if (x + y === '78') return (
        <div className='tile-container' >
            <img src={sevenEight} className='tile' /> 
        </div>
    )
    else return (
        <div className='tile-container'>
            <img src={eightFour} className='tile' />
        </div>
    )    

};

    