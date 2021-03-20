const MaxBinaryHeap = require('./max-binary-heap');

describe('max binary heap 0 based', () => {
    test('should correctly add elements to the heap', () => {
        const minBH = new MaxBinaryHeap((i, j) => i - j);

        minBH.add(1);
        expect(minBH.arr).toEqual([1]);

        minBH.add(2);
        expect(minBH.arr).toEqual([2, 1]);

        minBH.add(3);
        expect(minBH.arr).toEqual([3, 1, 2]);

        minBH.add(0);
        expect(minBH.arr).toEqual([3, 1, 2, 0]);

        minBH.add(7);
        expect(minBH.arr).toEqual([7, 3, 2, 0, 1]);
    });

    test('should correctly remove max element', () => {
        const minBH = new MaxBinaryHeap((i, j) => i - j);

        minBH.add(1);
        minBH.add(2);
        minBH.add(3);
        minBH.add(0);
        minBH.add(7);

        expect(minBH.peek()).toEqual(7);
        let max = minBH.remove();
        expect(max).toEqual(7);
        expect(minBH.arr).toEqual([3, 1, 2, 0]);

        expect(minBH.peek()).toEqual(3);
        max = minBH.remove();
        expect(max).toEqual(3);
        expect(minBH.arr).toEqual([2, 1, 0]);

        expect(minBH.peek()).toEqual(2);
        max = minBH.remove();
        expect(max).toEqual(2);
        expect(minBH.arr).toEqual([1, 0]);

        expect(minBH.peek()).toEqual(1);
        max = minBH.remove();
        expect(max).toEqual(1);
        expect(minBH.arr).toEqual([0]);
    });

    test('should correctly heapify input arr', () => {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const maxBH = new MaxBinaryHeap((i, j) => i - j, arr);
        let expected = [8, 5, 7, 4, 1, 6, 3, 2];

        expect(maxBH.arr).toEqual(expected);
    });
});
