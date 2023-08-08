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
        tile.dataset.coords = key;
        playerBoard.appendChild(tile)
    }
}