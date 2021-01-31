const getLongestCommonPrefix = require('./6-longest-common-prefix');
const getLongestCommonPrefix1 = require('./6-longest-common-prefix-1');

const testData = [
    [['colorado', 'color', 'cold'], 'col'],
    [['a', 'b', 'c'], ''],
    [['spot', 'spotty', 'spotted'], 'spot'],
    [['a', '', '', 'a'], ''],
    [['', 'a', 'a', 'a'], ''],
    [['1', '1234', '12'], '1'],
];
describe('getLongestCommonPrefix', () => {
    test.each(testData)('(%s) -> %s', (arr, expected) => {
        expect(getLongestCommonPrefix(arr)).toEqual(expected);
    });
});

describe('getLongestCommonPrefix1', () => {
    test.each(testData)('(%s) -> %s', (arr, expected) => {
        expect(getLongestCommonPrefix1(arr)).toEqual(expected);
    });
});
