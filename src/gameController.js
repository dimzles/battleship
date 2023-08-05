import Gameboard from './Gameboard.js';
import Player from './Player.js';

let player1, player2;
let currentTurn = 0;

function initialiseGame() {
    player1 = new Player();
    player2 = new Player();
    const p1gameboard = new Gameboard();
    const p2gameboard = new Gameboard();

    player1.setGameboard(p1gameboard);
    player2.setGameboard(p2gameboard);

    player1.setTurn(true);
}