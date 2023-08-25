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

    const hit = () => {
        if (hits === length) return
        hits++
    }

    return { getLength, getHits, isSunk, hit }
}