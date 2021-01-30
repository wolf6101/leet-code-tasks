const reverseString = require('./1-reverse-string');

const testData = [
    ['Hello', 'olleH'],
    ['Join US 2018', '8102 SU nioJ'],
    ['a', 'a'],
    ['', ''],
    ['The Daily Byte', 'etyB yliaD ehT'],
    ['civic', 'civic']
];

describe('reverse_string', () => {
    test.each(testData)('(%s) -> %s', (str, expected) => {
        expect(reverseString(str)).toEqual(expected);
    });
});
