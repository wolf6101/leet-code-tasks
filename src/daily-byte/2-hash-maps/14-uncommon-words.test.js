const getUncommonWords = require('./14-uncommon-words');

const testData = [
    ['foo bar', 'bar ton', ['foo', 'ton']],
    ['the quick', 'brown fox', ['the', 'quick', 'brown', 'fox']],
    ['the tortoise beat the haire', 'the tortoise lost to the haire', ['beat', 'to', 'lost']],
    ['copper coffee pot', 'hot coffee pot', ['copper', 'hot']],
    ['copper coffee pot', 'copper coffee pot', []],
    ['copper coffee pot', '', ['copper', 'coffee', 'pot']]

];

describe('getUncommonWords', () => {
    test.each(testData)('(%s, %s) => %s', (str1, str2, expected) => {
        expect(getUncommonWords(str1, str2).sort()).toEqual(expected.sort());
    })
});
