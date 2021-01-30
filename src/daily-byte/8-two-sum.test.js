const twoSum = require('./8-two-sum');

const testData = [
    [[1, 3, 8, 2], 10, true],
    [[3, 9, 13, 7], 8, false],
    [[4, 2, 6, 5, 2], 4, true],
];

describe('twoSum', () => {
    test.each(testData)('(%s, %s) -> %s', (arr, sum, expected) => {
        expect(twoSum(arr, sum)).toEqual(expected);
    })
});