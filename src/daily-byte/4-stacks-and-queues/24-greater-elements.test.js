const greaterElements = require('./24-greater-elements');

const testData = [
    [
        [4, 1, 2],
        [1, 3, 4, 2],
        [-1, 3, -1],
    ],
    [
        [4, 1, 3, 2],
        [1, 3, 4, 2],
        [-1, 3, 4, -1],
    ],
    [
        [2, 4],
        [1, 2, 3, 4],
        [3, -1],
    ],
    [
        [2, 4, 3],
        [1, 2, 3, 4],
        [3, -1, 4],
    ],
    [
        [5, 4, 3, 2, 8],
        [9, 8, 7, 5, 4, 3, 2, 6],
        [6, 6, 6, 6, -1],
    ],
    [[1], [1, 2], [2]],
];

describe('greaterElements', () => {
    test.each(testData)('(%s, %s) -> %s', (arr1, arr2, expected) => {
        expect(greaterElements(arr1, arr2)).toEqual(expected);
    });
});
