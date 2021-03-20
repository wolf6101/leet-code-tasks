const lastStoneWeight = require('./1046.last-stone-weight');

// [8,7,4,1,2,1]
// 8 7
// [4,1,2,1,1]
// 4 1
// [3,2,1,1]
// 3 2
// [1,1,1]
// 1 1
// 1
describe('703.kth-largest-element-in-a-stream', () => {
    test('should return 1', () => {
        let arr = [8, 7, 4, 1, 2, 1];
        let lastWeight = lastStoneWeight(arr);

        expect(lastWeight).toEqual(1);
    });

    test('should return 0', () => {
        let arr = [8, 7, 4, 1, 2];
        let lastWeight = lastStoneWeight(arr);

        expect(lastWeight).toEqual(0);
    });
});
