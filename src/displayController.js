export function renderGameboard(player) {
    const gameboard = player.gameboard.board;
    const p1div = document.getElementById('p1-board');
    const p2div = document.getElementById('p2-board');
    const mapArray = gameboard.keys();
    let playerBoard;

    if (player.currentTurn === true) {
        playerBoard = p1div
    } else {
        playerBoard = p2div
    }

    for (let i = 0; i < gameboard.size; i++) {
        const tile = document.createElement('div')
        let key = mapArray.next().value

        tile.classList.add('board-tile')
        tile.setAttribute('id', player.playerType + '-' + key)
        playerBoard.appendChild(tile)
    }
}

export function renderShips(player) {
    let boardDiv;

    if (player.playerType === 'p1') {
        boardDiv = document.getElementById('p1-board');   
    } else {
        boardDiv = document.getElementById('p2-board');
    }

    player.gameboard.shipLocations.forEach(ship => {
        ship.shipCoords.forEach(coord => {
            coord.toString()
            const tile = document.getElementById(player.playerType + '-' + coord)
            tile.style.backgroundColor = 'gray'
        })
    })
}