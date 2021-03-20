/*
 * @lc app=leetcode id=1046 lang=javascript
 *
 * [1046] Last Stone Weight
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    let comparator = (a, b) => a - b;
    let heap = new MaxBinaryHeap(comparator, stones); // O(N) T, O(1) S

    // O(N) T
    while (heap.size() >= 2) {
        let first = heap.remove(); // O(Log(N))
        let second = heap.remove(); // O(Log(N))

        if (first !== second) {
            heap.add(Math.abs(first - second)); // O(Log(N))
        }
    }

    if (heap.size() === 0) return 0;
    else return heap.remove();
};

class BinaryHeap {
    constructor(compare, arr) {
        this.compare = compare;

        this.arr = [];

        if (arr) {
            this.buildHeap(arr);
        }
    }

    // O(N) T, O(1) S builds heap in place
    buildHeap(arr) {
        this.arr = arr;

        let lastParentIdx = this.getParentIdx(this.arr.length - 1);

        for (let i = lastParentIdx; i >= 0; i--) {
            this.sink(i);
        }
    }

    add(val) {
        this.arr.push(val);
        this.swim(this.arr.length - 1);
    }

    remove() {
        let top = this.arr[0];
        this.swap(0, this.arr.length - 1);
        this.arr.pop();
        this.sink(0);

        return top;
    }

    sink() {}

    swim() {}

    peek() {
        return this.arr[0];
    }

    size() {
        return this.arr.length;
    }

    getParentIdx(i) {
        let parentIdx = Math.floor((i - 1) / 2);
        return parentIdx;
    }

    swap(i, j) {
        let tmp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = tmp;
    }
}

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
            isSecondChildExist && this.less(firstChildIdx, firstChildIdx + 1)
                ? firstChildIdx + 1
                : firstChildIdx;

        return gtChildIdx;
    }
}

// @lc code=end
module.exports = lastStoneWeight;
