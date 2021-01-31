const utils = require('../../../utils');
const twoNumberSum1 = require('./two-number-sum-1');
const twoNumberSum2 = require('./two-number-sum-2');
const twoNumberSum3 = require('./two-number-sum-3');

const testData = [
    //  [[arr], sum, [expected]],
    [[], 0, []],
    [[2, 7, 11, 15], 9, [2, 7]],
    [[2, 3, 10, 0, -3], 7, [10, -3]],
    [[1, 2, 3, 5], 11, []],
    [[-1, -3, -4, -5], -7, [-3, -4]],
];

describe('twoNumberSum brute force', () => {
    test.each(testData)('(%s, %s) -> %s', (arr, sum, expected) => {
        expect(twoNumberSum1(arr, sum).sort()).toEqual(expected.sort());
    });

    test.skip('big input 10,000,000', () => {
        let heavyArr = utils.range(0, 10000000, 1);
        heavyArr.push(-10000000);
        expect(twoNumberSum1(heavyArr, 0).sort()).toEqual([-10000000, 10000000].sort());
    });
});

describe('twoNumberSum sorted array two pointers traversal based', () => {
    test.each(testData)('(%s, %s) -> %s', (arr, sum, expected) => {
        expect(twoNumberSum2(arr, sum).sort()).toEqual(expected.sort());
    });

    test.skip('big input 10,000,000', () => {
        let heavyArr = utils.range(0, 10000000, 1);
        heavyArr.push(-10000000);
        expect(twoNumberSum2(heavyArr, 0).sort()).toEqual([-10000000, 10000000].sort());
    });
});

describe('twoNumberSum hash table based', () => {
    test.each(testData)('(%s, %s) -> %s', (arr, sum, expected) => {
        expect(twoNumberSum3(arr, sum).sort()).toEqual(expected.sort());
    });

    test.skip('big input 10,000,000', () => {
        let heavyArr = utils.range(0, 10000000, 1);
        heavyArr.push(-10000000);
        expect(twoNumberSum3(heavyArr, 0).sort()).toEqual([-10000000, 10000000].sort());
    });
});
