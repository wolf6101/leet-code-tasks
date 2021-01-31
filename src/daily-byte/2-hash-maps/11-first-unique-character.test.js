const getFirstUniqueCharacter = require('./11-first-unique-character');

const testData = [
    ['abcabd', 2],
    ['thedailybyte', 1],
    ['developer', 0],
    ['aaaaa', -1],
    ['ababfb', 4],
    ['', -1],
    [undefined, -1]
];

describe('getFirstUniqueCharacter', () => { 
    test.each(testData)('(%s) -> %s', (str, expected) => {
        expect(getFirstUniqueCharacter(str)).toEqual(expected);
    });
});