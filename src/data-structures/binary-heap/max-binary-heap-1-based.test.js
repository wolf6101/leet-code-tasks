const MaxBinaryHeap = require('./max-binary-heap-1-based');

describe('max binary heap', () => {
    test('should correctly add elements to the heap', () => {
        const maxBH = new MaxBinaryHeap();
        
        maxBH.add(1);
        expect(maxBH.arr).toEqual([NaN, 1]);

        maxBH.add(2);
        expect(maxBH.arr).toEqual([NaN, 2, 1]);

        maxBH.add(3);
        expect(maxBH.arr).toEqual([NaN, 3, 1, 2]);

        maxBH.add(0);
        expect(maxBH.arr).toEqual([NaN, 3, 1, 2, 0]);
        
        maxBH.add(7);
        expect(maxBH.arr).toEqual([NaN, 7, 3, 2, 0, 1]);
    });

    test('should correctly remove max element', () => {
        const maxBH = new MaxBinaryHeap();
        
        maxBH.add(1);
        maxBH.add(2);
        maxBH.add(3);
        maxBH.add(0);
        maxBH.add(7);

        let max = maxBH.removeMax();
        expect(max).toEqual(7);
        expect(maxBH.arr).toEqual([NaN, 3, 1, 2, 0, null]);

        max = maxBH.removeMax();
        expect(max).toEqual(3);
        expect(maxBH.arr).toEqual([NaN, 2, 1, 0, null, null]);

        max = maxBH.removeMax();
        expect(max).toEqual(2);
        expect(maxBH.arr).toEqual([NaN, 1, 0, null, null, null]);
        
        max = maxBH.removeMax();
        expect(max).toEqual(1);
        expect(maxBH.arr).toEqual([NaN, 0, null, null, null, null]);
    });
});