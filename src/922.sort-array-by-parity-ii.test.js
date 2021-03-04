const sortArrayByParityII = require('./922.sort-array-by-parity-ii');

const testData = [
    [[2, 3], [2, 3]],
    [[3, 2], [2, 3]],
    [[4, 2, 5, 7], [4, 5, 2, 7]],
    [[1, 2, 3, 5, 6, 7, 8, 10], [2, 1, 10, 5, 6, 7, 8, 3]]
];

describe('sortArrayByParityII', () => {
    test.each(testData)('(%s) -> %s', (arr, expected) => {
        expect(sortArrayByParityII(arr)).toEqual(expected);
    })
});