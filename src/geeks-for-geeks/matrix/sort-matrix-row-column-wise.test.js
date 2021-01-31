const sortMatrixRowColumnWise = require('./sort-matrix-row-column-wise');

const testData = [
    [[
        [4, 1, 3],
        [9, 6, 8],
        [5, 2, 7]
    ],
    [
        [1, 3, 4],
        [2, 5, 7],
        [6, 8, 9]
    ]],
    [[
        [12, 7, 1, 8],
        [20, 9, 11, 2],
        [15, 4, 5, 13],
        [3, 18, 10, 6]
    ],
    [
        [1, 5, 8, 12],
        [2, 6, 10, 15],
        [3, 7, 11, 18],
        [4, 9, 13, 20]
    ]]
];

describe('sortMatrixRowColumnWise', () => {
    test.each(testData)('(%s) -> %s', (matrix, expected) => {
        expect(sortMatrixRowColumnWise(matrix)).toEqual(expected);
    })
});