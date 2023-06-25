import testFunction from "../src/Ship.js";
import indexFunction from "../src/index.js";

describe('Ship factory returns Ship object with correct properties', () => {
    const ship = Ship(5)
    expect(ship.getLength()).toBe(5);
    expect(ship.getHits()).toBe(0);
    expect(ship.isSunk()).toBe(false);
})