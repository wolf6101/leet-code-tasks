const spotTheDifference = require('./12-spot-the-difference');

const testData = [
    ['abcd', 'a0bcd', '0'],
    ['foobar', 'barfoot', 't'],
    ['ide', 'idea', 'a'],
    ['coding', 'ingcod', ''],
    ['ololo', 'ololo', ''],
    ['ollolo', 'ololo', ''],
    ['ololo', 'ol1olo', '1'],
];

describe('spotTheDifference', () => {
    test.each(testData)('(%s, %s) -> %s', (str1, str2, expected) => {
        expect(spotTheDifference(str1, str2)).toEqual(expected);
    });
});