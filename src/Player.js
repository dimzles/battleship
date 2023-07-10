export default class Player {
    constructor() {
        this.currentTurn = false;
        this.playedMoves = [];
    }

    playTurn(gameboard, coordArray) {
        this.playedMoves.push(`${coordArray}`)
        gameboard.receiveAttack(coordArray)
    }
}