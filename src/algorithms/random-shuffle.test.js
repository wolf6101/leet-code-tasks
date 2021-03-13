const randomShuffle = require('./random-shuffle');

const testData = [
    [[1, 3, 8, 2]],
    [[4, 2, 6, 5, 2]],
    [[1, 2, 3, 4, 5, 6]],
];

describe('randomShuffle', () => {
    test.each(testData)('(%s)', (arr) => {
        expect(randomShuffle(arr)).not.toEqual(arr);
    })
});