const getIntersection = require('./13-intersection-of-numbers');

const testData = [
    [[1, 2, 3], [2, 3], [2, 3]],
    [[2, 4, 4, 2], [2, 4], [2, 4]],
    [[1, 2, 3, 3], [3, 3], [3, 3]],
    [[2, 4, 6, 8], [1, 3, 5, 7], []],
    [[1, 1], [1, 1, 1, 1], [1, 1]],
    [[], [], []],
];

describe('getIntersection', () => {
    test.each(testData)('(%s, %s) -> %s', (arr1, arr2, expected) => {
        expect(getIntersection(arr1, arr2)).toEqual(expected);
    })
});