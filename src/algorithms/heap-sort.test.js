const sort = require('./heap-sort');
const sortReverse = require('./heap-sort-reversed');

const testData = [
    [[1, 3, 8, 2], [1, 2, 3, 8]],
    [[4, 2, 6, 5, 2], [2, 2, 4, 5, 6]],
    [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]],
    [[1, 1, 3, 3, 4, 3, 4, 3, 4, 3, 4, 4, 1, 1], [1, 1, 1, 1, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4]],
];

describe('heap-sort', () => {
    test.each(testData)('(%s) -> %s', (arr, expected) => {
        expect(sort(arr)).toEqual(expected);
    })
});

describe('heap-sort-reversed', () => {
    test.each(testData)('(%s) -> %s', (arr, expected) => {
        expect(sortReverse(arr)).toEqual(expected.reverse());
    })
});