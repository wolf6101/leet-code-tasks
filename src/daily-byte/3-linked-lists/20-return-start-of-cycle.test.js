const getStartOfCycle = require('./20-return-start-of-cycle');
const { getLinkedListWithLoop } = require('../../utils');
const testData = [
    [[1, 2, 3, 1], 1],
    [[1, 2, 3], null],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 4], 4],
    [[], null],
    [[1], null],
];

describe('getStartOfCycle', () => {
    test.each(testData)('(%s) => %s', (arr, expected) => {
        const head = getLinkedListWithLoop(arr);        
        
        const startOfCycle = getStartOfCycle(head);

        expect(startOfCycle && startOfCycle.value || null).toEqual(expected);
    })
});
