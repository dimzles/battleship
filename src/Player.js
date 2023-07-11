export default class Player {
    constructor() {
        this.currentTurn = false;
        this.playedMoves = [];
    }

    playTurn(gameboard, coordArray) {
        this.playedMoves.push(`${coordArray}`)
        gameboard.receiveAttack(coordArray)
    }

    playRandomMove(gameboard) {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        const coords = [x, y]

        gameboard.receiveAttack(coords)
        this.playedMoves.push(coords)

        return `${coords}`
    }
}