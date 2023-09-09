import Gameboard from './Gameboard.js';
import Player from './Player.js';
import { disableDragAndDrop, enableDragAndDrop, renderGameboard, renderShips } from './displayController.js';
import { Ship } from './Ship.js';

let player1;
let player2;
export class GameController {
    constructor() {}
    
    currentTurn = 0;
    
    initialiseGame() {
        this.player1 = new Player('p1');
        this.player2 = new Player('p2');
        this.player1.gameboard = new Gameboard();
        this.player2.gameboard = new Gameboard();
        renderGameboard(this.player1)
        renderGameboard(this.player2)
        this.initialiseShips()
    }

    initialiseShips() {
        const ships = [Ship(5), Ship(2), Ship(4), Ship(3), Ship(2)]

        renderShips(ships)
    }

    checkP1Turn() {
        return currentTurn % 2 === 0 ? true : false;
    }

    checkP2Turn() {
        return currentTurn % 2 === 1 ? true : false;
    }

    startGame() {
        this.playTurn()
    }

    playTurn() {
        //if true, is a turn to place ships
        if (this.currentTurn === 0 || this.currentTurn === 1) {
            if (this.checkP1Turn) {
                enableDragAndDrop(this.player1)
                disableDragAndDrop(this.player2)
            } else if (this.checkP2Turn) {
                enableDragAndDrop(this.player2)
                disableDragAndDrop(this.player1)
            }
        }

        this.currentTurn++;
    }
}