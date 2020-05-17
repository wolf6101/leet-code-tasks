const subArraySort1 = require('./subarray-sort-1');
const subArraySort2 = require('./subarray-sort-2');

const testData = 
[
    [[], [-1, -1]],
    [[2, 3, 7, 5, 1, 16, 20], [0, 4]],
    [[-1, 0, 3, 8, 4, 20], [3, 4]],
    [[23, 25, 26, 7, 1, 3, 16], [0, 6]],
    [[1, 2, 3, 4, 5, 6, 7], [-1, -1]],
    [[4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57], [0, 11]],
    [[-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57], [1, 11]]
]

describe('subArraySort1', () => {
    test.each(testData)('(%s) -> %s', (array, expected) => {
        expect(subArraySort1(array)).toEqual(expected);
    });
})

describe('subArraySort2', () => {
    test.each(testData)('(%s) -> %s', (array, expected) => {
        expect(subArraySort2(array)).toEqual(expected);
    });
})