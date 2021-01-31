const isValidAnagram = require('./10-valid-anagram');

const testData = [
    ['str', 'trs', true],
    ['sTr', 'trs', false],
    ['cat', 'tac', true],
    ['listen', 'silent', true],
    ['program', 'function', false],
    ['catt', 'taac', false],
    ['cat', 'c', false],

];

describe('isValidAnagram', () => {
    test.each(testData)('(%s, %s) -> %s', (str1, str2, expected) => {
        expect(isValidAnagram(str1, str2)).toEqual(expected);
    })
});