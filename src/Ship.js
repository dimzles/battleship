export const Ship = (length) => {
    let hits = 0;

    const getName = () => {
        switch (length) {
            case 2:
                return 'Destroyer'
                break;
            case 3:
                return 'Submarine'
                break;
            case 4:
                return 'Battleship'
                break;
            case 5:
                return 'Carrier'
                break;
            default:
                break;
        }
    }

    const getLength = () => {
        return length;
    }

    const getHits = () => {
        return hits;
    }

    const isSunk = () => {
        if (hits === length) return true;
        return false;
    }

    const hit = () => {
        if (hits === length) return
        hits++
    }

    return { getLength, getHits, getName, isSunk, hit }
}