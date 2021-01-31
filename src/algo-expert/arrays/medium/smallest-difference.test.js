const utils = require('./../../../utils');
const smallestDifference1 = require('./smallest-difference-1');
const smallestDifference2 = require('./smallest-difference-2');

const testData = [
//  [[arr1], [arr2], [expected]],
    [[], [], []],
    [[20, 5, 6], [19, 7, 5], [5, 5]],
    [[20, 8, 6], [19, 10, 11], [20, 19]],
    [[90, 8, 12], [19, 7, -2], [8, 7]],
    [[1, 7, 13, 9, -3], [160, 240, -2], [-3, -2]],
    [[-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17], [28, 26]],
    [[10, 0, 20, 25, 2000], [1005, 1006, 1014, 1032, 1031], [2000, 1032]]
];

describe('smallestDifference1 binary search based', () => {
    test.each(testData)('(%s, %s) -> %s', (arr1, arr2, expected) => {
        expect(smallestDifference1(arr1, arr2)).toEqual(expected);
    });

    test.skip('big input 10,000,000', () => {
        let arr1 = utils.range(0, 10000000, 1);
        let arr2 = utils.range(10000000, 20000000, 1);
        expect(smallestDifference1(arr1, arr2)).toEqual([1000000, 1000000]);
    });
});

describe('smallestDifference2 two pointers traversal', () => {
    test.each(testData)('(%s, %s) -> %s', (arr1, arr2, expected) => {
        expect(smallestDifference2(arr1, arr2)).toEqual(expected);
    });

    test.skip('big input 10,000,000', () => {
        let arr1 = utils.range(0, 10000000, 1);
        let arr2 = utils.range(10000000, 20000000, 1);
        expect(smallestDifference2(arr1, arr2)).toEqual([1000000, 1000000]);
    });
});
