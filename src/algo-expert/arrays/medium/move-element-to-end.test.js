const utils = require('../../utils');
const moveElementToEnd1 = require('./move-element-to-end');

const testData = [
//  [[array], toMove, [expected]],
    [[], 0, []],
    [[0, 0, 0], 1, [0, 0, 0]],
    [[0, 0], 0, [0, 0]],
    [[2, 1, 2, 5, 3, 2], 2, [1, 5, 3, 2, 2, 2]],
    [[90, 8, 12, 105, 23, 1, 23, 105], 105, [90, 8, 12, 23, 1, 23, 105, 105]],
    [[-2, -1, -5, -2, -3, -2], 2, [-1, -5, -3, -2, -2, -2]]
];

describe('moveElementToEnd1', () => {
    test.each(testData)('(%s, %s) -> %s', (array, toMove, expected) => {
        expect(moveElementToEnd1(array, toMove).sort()).toEqual(expected.sort());
    });

    test.skip('big input 100,000', () => {
        let arr = utils.range(0, 100000, 1);
        let expected = utils.range(0, 100000, 1);
        expected[1] = expected[99999];
        expected[99999] = 1;

        expect(moveElementToEnd1(arr, 1).sort()).toEqual(expected.sort());
    });
});