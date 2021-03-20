const MinBinaryHeap = require('./min-binary-heap');

describe('min binary heap 0 based', () => {
    test('should correctly add elements to the heap', () => {
        const minBH = new MinBinaryHeap((i, j) => i - j);

        minBH.add(1);
        expect(minBH.arr).toEqual([1]);

        minBH.add(2);
        expect(minBH.arr).toEqual([1, 2]);

        minBH.add(3);
        expect(minBH.arr).toEqual([1, 2, 3]);

        minBH.add(0);
        expect(minBH.arr).toEqual([0, 1, 3, 2]);

        minBH.add(7);
        expect(minBH.arr).toEqual([0, 1, 3, 2, 7]);
    });

    test('should correctly remove min element', () => {
        const minBH = new MinBinaryHeap((i, j) => i - j);

        minBH.add(1);
        minBH.add(2);
        minBH.add(3);
        minBH.add(0);
        minBH.add(7);

        expect(minBH.peek()).toEqual(0);
        let min = minBH.remove();
        expect(min).toEqual(0);
        expect(minBH.arr).toEqual([1, 2, 3, 7]);

        expect(minBH.peek()).toEqual(1);
        min = minBH.remove();
        expect(min).toEqual(1);
        expect(minBH.arr).toEqual([2, 7, 3]);

        expect(minBH.peek()).toEqual(2);
        min = minBH.remove();
        expect(min).toEqual(2);
        expect(minBH.arr).toEqual([3, 7]);

        expect(minBH.peek()).toEqual(3);
        min = minBH.remove();
        expect(min).toEqual(3);
        expect(minBH.arr).toEqual([7]);
    });

    test('should correctly heapify input arr', () => {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const minBH = new MinBinaryHeap((i, j) => i - j, arr);
        let expected = [1, 2, 3, 4, 5, 6, 7, 8];

        expect(minBH.arr).toEqual(expected);
    });
});
