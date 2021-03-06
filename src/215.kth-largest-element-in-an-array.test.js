const findKthLargestRecursion = require('./215.kth-largest-element-in-an-array-recursion');
const findKthLargest = require('./215.kth-largest-element-in-an-array');

const testData = [
    [[1, 3, 8, 2], 2, 3],
    [[4, 2, 6, 5, 2], 3, 4],
    [[1, 2, 3, 4, 5, 6], 2, 5],
];

describe('findKthLargestRecursion', () => {
    test.each(testData)('(%s, %s) -> %s', (arr, k, expected) => {
        expect(findKthLargestRecursion(arr, k)).toEqual(expected);
    })
});

describe('findKthLargest', () => {
    test.each(testData)('(%s, %s) -> %s', (arr, k, expected) => {
        expect(findKthLargest(arr, k)).toEqual(expected);
    })
});