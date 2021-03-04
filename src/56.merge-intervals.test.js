const mergeIntervals = require('./56.merge-intervals');

const testData = [
    [
        [
            [1, 3],
            [2, 6],
            [8, 10],
            [15, 18],
        ],
        [
            [1, 6],
            [8, 10],
            [15, 18],
        ],
    ],
    [
        [
            [1, 4],
            [4, 5],
        ],
        [[1, 5]],
    ],
    [
        [
            [1, 5],
            [2, 4],
            [8, 10],
            [15, 18],
        ],
        [
            [1, 5],
            [8, 10],
            [15, 18],
        ],
    ],
    [
        [
            [1, 2],
            [1, 2],
        ],
        [[1, 2]],
    ],
    [
        [
            [1, 2],
            [1, 3],
            [3, 4],
            [4, 5],
            [5, 6],
        ],
        [[1, 6]],
    ],
    [[], []],
];

describe('mergeIntervals', () => {
    test.each(testData)('(%s) -> %s', (arr, expected) => {
        expect(mergeIntervals(arr)).toEqual(expected);
    });
});
