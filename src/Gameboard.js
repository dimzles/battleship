import { Ship } from "./Ship";

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

    placeShip(length, coordArray, orientation) {
        const ship = Ship(length);
        const x = coordArray[0];
        const y = coordArray[1];
        const posArray = [];


        switch (orientation) {
            case 'vertical':
                for (let i = 0; i < ship.getLength(); i++) {
                    posArray.push([x, y + i]);
                };
                break;
            case 'horizontal':
                for (let i = 0; i < ship.getLength(); i++) {
                    posArray.push([x + i, y]);
                };
                break;
            default:
                return 'You must provide a valid orientation!';
        }

        posArray.forEach(element => {
            this.board.get(`${element}`).containsShip = ship
        })

        this.shipLocations.push({
            "shipIsSunk": ship.isSunk(),
            "shipCoords": posArray,
            "orientation": orientation
        });
    }

    receiveAttack(coordArray) {
        const x = coordArray[0]
        const y = coordArray[1]
        const tile = this.board.get(`${[x, y]}`)
        const ship = tile.containsShip

        ship.hit()
        tile.hasReceivedHit = true;
    }
}