export default function getRotation(diceNumber){
    switch(diceNumber) {
        case 2:
            return [0, 1.55, 0];
        case 3:
            return [1.57, 0, 0];
        case 4:
            return [-1.57, 0, 0];
        case 5:
            return [0, 4.71, 0];
        case 6:
            return [0, 3.15, 1.571];
        default:
            return [0, 0, 0];
            // throw new Error(`She's gone too high Cap'n!`)
    }
}