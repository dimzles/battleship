export default class Gameboard {
    constructor() {
        this.board = new Map();
        this.addVertices();
        this.shipLocations = [];
        }

    addVertices(size = 10) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                this.board.set(`${[i, j]}`, {
                    "containsShip": false,
                    "hasReceivedHit": false
                })
            }
        }
    }
}