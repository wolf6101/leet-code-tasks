const howManyStonesAreJewels = require('./9-stones-and-jewels');

const testData = [
    ['abc', 'ac', 2],
    ['Af', 'AaaddfFf', 3],
    ['AYOPD', 'ayopd', 0],
    ['', '', 0],
];
describe('howManyStonesAreJewels', () => {
    test.each(testData)('(%s, %s) -> %s', (jewels, stones, expected) => {
        expect(howManyStonesAreJewels(jewels, stones)).toEqual(expected);
    })
})