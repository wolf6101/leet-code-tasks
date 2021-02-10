const removeAdjacentDuplicates = require('./23-remove-adjacent-duplicates');

const testData = [
    ['abccba', ''],
    ['foobar', 'fbar'],
    ['abccbefggfe', 'a'],
    ['  ', '']
];

describe('removeAdjacentDuplicates', () => {
    test.each(testData)('(%s) -> %s', (str, expected) => {
        expect(removeAdjacentDuplicates(str)).toEqual(expected);
    })
});