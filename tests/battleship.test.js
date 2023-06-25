import { Ship } from "../src/Ship.js";
import Gameboard from "../src/Gameboard.js";

describe('Ship.js tests', () => {
    const ship = Ship(5);

    test('Returns correct length', () => {
        expect(ship.getLength()).toBe(5);
    });

    test('Returns correct number of hits', () => {
        expect(ship.getHits()).toBe(0);
    });

    test('Returns false if ship is not sunk', () => {
        expect(ship.isSunk()).toBe(false);
    });

    test('Returns true if ship is sunk', () => {
        const sunkShip = Ship(1);
        sunkShip.hit();
        expect(sunkShip.isSunk()).toBe(true);
    });

    test('Ships can recieve hits', () => {
        const ship2 = Ship(4);
        ship2.hit();
        expect(ship2.getHits()).toBe(1);
    });

})

describe('Gameboard.js tests', () => {
    const gameboard = new Gameboard();

    test('Creates a gameboard of correct size', () => {
        expect(gameboard.board.size).toBe(100);
    });
})