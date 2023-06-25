import { Ship } from "../src/Ship.js";

describe('Ship.js tests', () => {
    const ship = Ship(5)
    test('Returns correct length', () => {
        expect(ship.getLength()).toBe(5);
    })
    test('Returns correct number of hits', () => {
        expect(ship.getHits()).toBe(0);
    })
    test('Returns if ship is sunk', () => {
        expect(ship.isSunk()).toBe(false);
    })
})