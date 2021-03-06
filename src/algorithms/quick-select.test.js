const quickSelectRecursion = require('./quick-select-recursion');
const quickSelect = require('./quick-select');

const testData = [
    [[1, 3, 8, 2], 2, 3],
    [[4, 2, 6, 5, 2], 3, 4],
    [[1, 2, 3, 4, 5, 6], 2, 5],
];

describe('quickSelectRecursion', () => {
    test.each(testData)('(%s, %s) -> %s', (arr, k, expected) => {
        expect(quickSelectRecursion(arr, k)).toEqual(expected);
    })
});

describe('quickSelect', () => {
    test.each(testData)('(%s, %s) -> %s', (arr, k, expected) => {
        expect(quickSelect(arr, k)).toEqual(expected);
    })
});