import testFunction from "../src/Ship.js";
import indexFunction from "../src/index.js";

describe('Test to see if project is setup correctly', () => {
    test('Check function in Ship.js', () => {
        expect(testFunction()).toMatch('test')
    })
    test('Check function in index.js', () => {
        expect(indexFunction()).toMatch('hello world')
    })
})