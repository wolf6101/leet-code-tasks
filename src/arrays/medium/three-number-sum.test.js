const threeNumberSum1 = require('./three-number-sum-1');
const threeNumberSum2 = require('./three-number-sum-2');

const testData = [
    //  [[arr], sum, [expected]],
    [[], 10, []],
    [[12, 3, 1, 2, -6, 5, -8, 6], 0, [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]],
    [[1, 2, 3], 6, [[1, 2, 3]]],
    [[1, 2, 3], 7, []],
    [[8, 10, -2, 49, 14], 57, [[-2, 10, 49]]],
    [[12, 3, 1, 2, -6, 5, 0, -8, -1], 0, [[-8, 3, 5], [-6, 1, 5], [-1, 0, 1]]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 32, [[8, 9, 15]]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 5, []]
];

describe('threeNumberSum1', () => {
    test.each(testData)('(%s) -> %s', (array, sum, expected) => {
        expect(threeNumberSum1(array, sum)).toEqual(expected);
    });
})

describe('threeNumberSum2', () => {
    test.each(testData)('(%s) -> %s', (array, sum, expected) => {
        expect(threeNumberSum2(array, sum)).toEqual(expected);
    });
})