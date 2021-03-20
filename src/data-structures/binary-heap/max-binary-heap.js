const BinaryHeap = require("./binary-heap");

class MaxBinaryHeap extends BinaryHeap {
    constructor(compare, arr) {
        super(compare, arr);
    }
    
    // O(log(N)) T
    sink(i) {
        let gtChildIdx = this.getGreaterChildIndex(i);

        while (gtChildIdx && this.less(i, gtChildIdx)) {
            this.swap(i, gtChildIdx);
            i = gtChildIdx;
            gtChildIdx = this.getGreaterChildIndex(i);
        }
    }

    // O(log(N)) T
    swim(i) {
        let parentIdx = this.getParentIdx(i);

        while (parentIdx >= 0 && this.less(parentIdx, i)) {
            this.swap(i, parentIdx);
            i = parentIdx;
            parentIdx = this.getParentIdx(i);
        }
    }

    less(i, j) {
        let result = this.compare(this.arr[i], this.arr[j]) < 0;
        return result;
    }

    getGreaterChildIndex(i) {
        let firstChildIdx = 2 * i + 1;

        if (firstChildIdx > this.arr.length - 1) return null;

        let isSecondChildExist = firstChildIdx + 1 < this.arr.length;

        let gtChildIdx =
            isSecondChildExist &&
            this.less(firstChildIdx, firstChildIdx + 1)
                ? firstChildIdx + 1
                : firstChildIdx;

        return gtChildIdx;
    }
}

module.exports = MaxBinaryHeap;

//mistakes
// 1. forgot about length, thought that arr.length could be reused, but it is not so to the case when we removeMax and nulling last element
// 2. in removeMax method was trying to sink 1st element instead of 0. In 0 based heap 0 index is the max element
