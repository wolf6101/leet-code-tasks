const isPalindrome = require('./2-is-palindrome');
const reverseString = require('./1-reverse-string');

const testData = [
    ['level', true],
    ['algorithm', false],
    ['A man, a plan, a canal: Panama.', true],
    ['', false],
    [4, false],
    ['.,/ -', false],
    ['.,/a -.', true],
    ['.,/ -a.', true],
];

describe('isPalindrome', () => {
    test.each(testData)('(%s) -> %s', (str, expected) => {
        expect(isPalindrome(str)).toEqual(expected);
    });
});
