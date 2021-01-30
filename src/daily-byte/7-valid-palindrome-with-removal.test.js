const isValidPalindromeWithRemoval = require('./7-valid-palindrome-with-removal');

const testData = [
    ['abcba', true],
    ['foobof', true],
    ['abccab', false],
    ['foobbof', true],
    ['fobboof', true],
    ['fobcboof', true],
    ['1234dsf', false],
    [123321, false],
    ['', true],
];

describe('isValidPalindromeWithRemoval', () => {
    test.each(testData)('(%s) -> %s', (str, expected) => {
        expect(isValidPalindromeWithRemoval(str)).toEqual(expected);
    });
});