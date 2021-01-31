const isCorrectCapitalization = require("./4-correct-capitalization");

const testData = [
    ['USA', true],
    ['Calvin', true],    
    ['compUter', false],
    ['computer1', true],
    ['coding', true],
    ['1234', true],
    ['', false],
    [undefined, false],
    [12345, false],
];
describe('isCorrectCapitalization', () => {
    test.each(testData)('(%s) -> %s', (str, expected) => {
        expect(isCorrectCapitalization(str)).toEqual(expected);
    })
});