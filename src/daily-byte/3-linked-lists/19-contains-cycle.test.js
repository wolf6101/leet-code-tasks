const containsCycle = require('./19-contains-cycle');
const { getLinkedListWithLoop } = require('../../utils');
const testData = [
    [[1, 2, 3, 1], true],
    [[1, 2, 3], false],
    [[1, 1], true],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 4], true],
    [[], false],
    [[1], false],
];

describe('containsCycle', () => {
    test.each(testData)('(%s) => %s', (arr, expected) => {
        const head = getLinkedListWithLoop(arr);        
        
        expect(containsCycle(head)).toEqual(expected);
    })
});
