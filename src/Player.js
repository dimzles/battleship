export default class Player {
    constructor(playerType) {
        this.currentTurn = false;
        this.playedMoves = [];
        this.gameboard = null;
        this.playerType = playerType
    }

    playTurn(gameboard, coordArray) {
        this.playedMoves.push(`${coordArray}`)
        gameboard.receiveAttack(coordArray)
        this.currentTurn = false;
    }

    playRandomMove(gameboard) {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        const coords = [x, y]

        this.playedMoves.forEach(coordArray => {
            if (coordArray === coords) return this.playRandomMove(gameboard)
        })

        gameboard.receiveAttack(coords)
        this.playedMoves.push(coords)

        return `${coords}`
    }

    setGameboard(gameboard) {
        this.gameboard = gameboard;
    }

    setTurn(bool) {
        if (bool === true) {
            this.currentTurn = true;
        } else {
            this.currentTurn = false;
        }
    }
}