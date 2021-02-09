const compareKeyStrokes = require('./22-compare-key-strokes');

const testData = [
    ['ABC#', 'CD##AB', true],
    ['como#pur#ter', 'computer', true],
    ['cof#dim#ng', 'code', false],
    ['string', 'string', true],
    ['##', '#', true],
];

describe('compareKeyStrokes', () => {
    test.each(testData)('(%s, %s) -> %s', (str1, str2, expected) => {
        expect(compareKeyStrokes(str1, str2)).toEqual(expected);
    })
});