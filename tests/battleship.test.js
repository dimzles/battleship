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
    const ship = Ship(5)

    test('Creates a gameboard of correct size', () => {
        expect(gameboard.board.size).toBe(100);
    });

    test('Places a ship at a given coordinate', () => {
        gameboard.placeShip(5, [0, 1], "vertical");
        const testObj = {
            ship,
            "shipIsSunk": false, 
            "shipCoords": [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5]],
            "orientation": "vertical"
        }

        const shipLocations = [...gameboard.shipLocations]

        expect(JSON.stringify(shipLocations[0])).toEqual(JSON.stringify(testObj))
    })

    test('Placed ships are updated in the board Map', () => {
        expect(JSON.stringify(gameboard.board.get('0,1'))).toEqual(JSON.stringify({
            "containsShip": ship,
            "hasReceivedHit": false
        }))
    })

    test('Gameboard can receive hit', () => {
        gameboard.receiveAttack([0,1])
        expect(JSON.stringify(gameboard.board.get('0,1'))).toEqual(JSON.stringify({
            "containsShip": ship,
            "hasReceivedHit": true
        }))
    })

    test('receiveAttack increases ship hit count', () => {
        const tile = gameboard.board.get('0,2');
        const ship = tile.containsShip

        expect(ship.getHits()).toBe(1)
    })

    test('Gameboard reports whether all ships have been sunk', () => {
        gameboard.receiveAttack([0,2])
        gameboard.receiveAttack([0,3])
        gameboard.receiveAttack([0,4])
        gameboard.receiveAttack([0,5])
        
        expect(gameboard.allShipsSunk()).toBe(true)
    })
})

describe('Player.js tests', () => {
    test('Player class is correctly initialised', () => {
        const player = new Player()
        expect(player).toBeInstanceOf(Player)
        expect(player.currentTurn).toBe(false)
        expect(player.playedMoves).toBeEmpty()
    })
})