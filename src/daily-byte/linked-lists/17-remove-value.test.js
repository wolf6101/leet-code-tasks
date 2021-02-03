const removeValue = require('./17-remove-value');
const { getArrayFromLinkedList, getLinkedList } = require('../../utils')
const testData = [
    [[1, 2, 3], 3, [1, 2]],
    [[8, 1, 1, 4, 12], 1, [8, 4, 12]],
    [[7, 12, 2, 9], 7, [12, 2, 9]],
    [[1, 2, 2, 4, 5], 2, [1, 4, 5]],
    [[1, 1, 1], 1, []],
    [[1, 2, 3], 1, [2, 3]],
    [[1, 2, 3, 4], 4, [1, 2, 3]],
    [[1, 2, 3, 4, 5], 4, [1, 2, 3, 5]],
    [[1, 2, 3, 4, 4], 4, [1, 2, 3]],
    [[1, 2, 3, 4, 4], 3, [1, 2, 4, 4]],
];

describe('removeValue', () => {
    test.each(testData)('(%s, %s) => %s', (arr, val, expected) => {
        const head = getLinkedList(arr);        
        const result = removeValue(head, val);
        
        expect(getArrayFromLinkedList(result)).toEqual(expected);
    })
});
