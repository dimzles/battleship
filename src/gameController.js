import Gameboard from './Gameboard.js';
import Player from './Player.js';
import { renderGameboard, renderShips } from './displayController.js';

let player1 = new Player('player');
let player2 = new Player('computer');
let currentTurn = 0;

export function initialiseGame() {
    player1 = new Player('p1');
    player2 = new Player('p2');
    const p1gameboard = new Gameboard();
    const p2gameboard = new Gameboard();

    player1.setGameboard(p1gameboard);
    player2.setGameboard(p2gameboard);

    player1.setTurn(true);

    renderGameboard(player1)
    placeShips(player1)
    renderShips(player1)
    renderGameboard(player2)
}

function placeShips(player) {
    const gameboard = player.gameboard;

    gameboard.placeShip(5, [0, 0], 'vertical')
}
