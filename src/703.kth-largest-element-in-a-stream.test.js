const KthLargest = require('./703.kth-largest-element-in-a-stream');

describe('703.kth-largest-element-in-a-stream', () => {
    test('check initialized properly', () => {
        let arr = [4, 5, 8, 2];
        let kthLargest = new KthLargest(3, arr);
       
        let expected;
        expected = kthLargest.add(3);
        expect(expected).toEqual(4);
        expected = kthLargest.add(5);
        expect(expected).toEqual(5);
        expected = kthLargest.add(10);
        expect(expected).toEqual(5);
        expected = kthLargest.add(9);
        expect(expected).toEqual(8);
        expected = kthLargest.add(4);
        expect(expected).toEqual(8);
    });
});

//[4, 5, 8, 2]
// [4 8 5] AFTER CONSTRUCTOR
// add 3
// [4 5 8] -> kth max 4
// add 5
// [5 8 5] -> kth max 5
// add 10
// [5 8 10] -> kth max 5
// add 9
// [8 9 10] -> kth max 8
// add 4
// [8 10 9] -> kth max 8