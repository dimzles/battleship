import { Ship } from "../src/Ship.js";

describe('Ship.js tests', () => {
    const ship = Ship(5)
    test('Returns correct length', () => {
        expect(ship.getLength()).toBe(5);
    })
    test('Returns correct number of hits', () => {
        expect(ship.getHits()).toBe(0);
    })
    test('Returns false if ship is not sunk', () => {
        expect(ship.isSunk()).toBe(false);
    })

    test('Ships can recieve hits', () => {
        const ship2 = Ship(4);
        ship2.hit();
        expect(ship2.getHits()).toBe(1);
    })
})