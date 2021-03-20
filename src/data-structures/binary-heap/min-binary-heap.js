const BinaryHeap = require('./binary-heap');

class MinBinaryHeap extends BinaryHeap {
    constructor(compare, arr) {
        super(compare, arr);
    }

    // O(log(N)) T
    sink(i) {
        let gtChildIdx = this.getSmallerChildIndex(i);

        while (gtChildIdx && this.greater(i, gtChildIdx)) {
            this.swap(i, gtChildIdx);
            i = gtChildIdx;
            gtChildIdx = this.getSmallerChildIndex(i);
        }
    }

    // O(log(N)) T
    swim(i) {
        let parentIdx = this.getParentIdx(i);

        while (parentIdx >= 0 && this.greater(parentIdx, i)) {
            this.swap(i, parentIdx);
            i = parentIdx;
            parentIdx = this.getParentIdx(i);
        }
    }

    greater(i, j) {
        let result = this.compare(this.arr[i], this.arr[j]) > 0;
        return result;
    }

    getSmallerChildIndex(i) {
        let firstChildIdx = 2 * i + 1;

        if (firstChildIdx > this.arr.length - 1) return null;

        let isSecondChildExist = firstChildIdx + 1 < this.arr.length;

        let smallerChildIdx =
            isSecondChildExist &&
            this.greater(firstChildIdx, firstChildIdx + 1)
                ? firstChildIdx + 1
                : firstChildIdx;

        return smallerChildIdx;
    }
}

module.exports = MinBinaryHeap;