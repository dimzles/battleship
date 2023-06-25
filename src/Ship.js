export const Ship = (length) => {
    let hits = 0;

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

    return { getLength, getHits, isSunk }
}