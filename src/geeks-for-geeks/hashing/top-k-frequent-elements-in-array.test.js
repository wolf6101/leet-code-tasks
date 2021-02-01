const getTopKFrequentElementsInArray = require('./top-k-frequent-elements-in-array');

const testData = [
    [[1, 1, 1, 2, 2, 3], 2, [1, 2]],
    [[1, 1, 2, 2, 3, 3, 3, 4], 2, [3, 2]],
    [[1, 1, 0, 0, 3, 3], 2, [1, 3]],
    [[3, 1, 4, 4, 5, 2, 6, 1], 2, [4, 1]],
    [[7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9], 4, [5, 11, 7, 10]]
];

describe('getTopKFrequentElementsInArray', () => {
    test.each(testData)('(%s, %s) -> %s', (arr, k, expected) => {
        expect(getTopKFrequentElementsInArray(arr, k).sort()).toEqual(expected.sort());
    });
});