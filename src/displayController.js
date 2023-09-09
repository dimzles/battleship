let dragged;

export function renderGameboard(player) {
    const board = document.getElementById(player.playerType + '-board')

    for (let i = 0; i < player.gameboard.board.size; i++) {
        const tile = document.createElement('div');

        tile.classList.add('board-tile')
        tile.setAttribute('id', player.playerType + '-' + i)

        tile.addEventListener('click', () => {
        })

        board.appendChild(tile)
    }
}

export function renderShips(shipArray) {
    const shipContainer = document.getElementById('shipContainer')
    shipArray.forEach(ship => {
        const shipDiv = document.createElement('div');
        const shipName = document.createElement('div')
        shipName.textContent = `${ship.getName(ship.getLength())}, size: ${ship.getLength()}`
        shipDiv.setAttribute('draggable', true)
        shipDiv.addEventListener('dragstart', (event) => {
            dragStart(event.target)
        })
        shipDiv.appendChild(shipName)
        shipContainer.appendChild(shipDiv)
        
    })
}

function dragStart(event) {
    dragged = event
}

export function enableDragAndDrop(player) {
    const board = document.getElementById(player.playerType + '-board')

    for (let i = 0; i < player.gameboard.board.size; i++) {
        const tile = document.getElementById(player.playerType + '-' + i)

        tile.addEventListener('drop', (event) => {
            const selectedPlayer = event.target.id.slice(0, 2)
            let coord = event.target.id.slice(3)
            coord = coord.length === 1 ? coord = '0,' + coord : `${coord[0]},${coord[1]}`
            if (selectedPlayer === player.playerType) {
                dragged.setAttribute('hidden', true)
                console.log(coord)
            }
        })

        tile.addEventListener('dragover', (e) => {
            e.preventDefault()
        })

    }
}

export function disableDragAndDrop(player) {
    const board = document.getElementById(player.playerType + '-board')

    for (let i = 0; i < player.gameboard.board.size; i++) {
        const tile = document.getElementById(player.playerType + '-' + i)

        tile.removeEventListener('drop', () => {
            console.log('event removed')
        })

        tile.removeEventListener('dragover', null)
    }
}
