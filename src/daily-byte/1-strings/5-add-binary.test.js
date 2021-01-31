const addBinary = require("./5-add-binary");

const testData = [
    ['100', '1', '101'],
    ['11', '1', '100'],
    ['101', '1010', '1111'],
    ['1111', '101', '10100'],
    ['10101010', '11001100', '101110110'],
];
describe('addBinary', () => {
    test.each(testData)('(%s, %s) -> %s', (str1, str2, expected) => {
        expect(addBinary(str1, str2)).toEqual(expected);
    })
});