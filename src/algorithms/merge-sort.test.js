const sort = require('./merge-sort');

const testData = [
    [[1, 3, 8, 2], [1, 2, 3, 8]],
    [[4, 2, 6, 5, 2], [2, 2, 4, 5, 6]],
    [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]],
];

describe('merge-sort', () => {
    test.each(testData)('(%s) -> %s', (arr, expected) => {
        expect(sort(arr)).toEqual(expected);
    })
});