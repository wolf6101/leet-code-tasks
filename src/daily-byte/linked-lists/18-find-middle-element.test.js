const findMiddleElement = require('./18-find-middle-element');
const { getLinkedList } = require('../../utils');
const testData = [
    [[1, 2, 3], 2],
    [[1, 2, 3, 4], 3],
    [[1, 4, 3, 1, 20, 14, 9, 44], 20],
    [[1, 2, 3, 4, 4, 6, 22], 4],
    [[1, 2, 3, 4], 3],
    [[1], 1],
    [[], ''],

];

describe('findMiddleElement', () => {
    test.each(testData)('(%s, %s) => %s', (arr, expected) => {
        const head = getLinkedList(arr);        
        
        expect(findMiddleElement(head)).toEqual(expected);
    })
});
