/*
 * @lc app=leetcode id=692 lang=javascript
 *
 * [692] Top K Frequent Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
// O(NLog(K) + KLog(K) + N + K) T = O(NLog(K)) T
// O(N) S, as far as K <= N - we can take it as N
var topKFrequent = function (words, k) {
    let hashMap = new Map(); // O(N) S

    // O(N) T
    for (let word of words) {
        hashMap.set(word, hashMap.get(word) ? hashMap.get(word) + 1 : 1);
    }

    //entry[0] - word, entry[1] - frequency
    let comparator = (entry1, entry2) => {
        if (entry1[1] === entry2[1]) {
            if (entry1[0] < entry2[0]) return 1; // it's important for reverse order 
            else if (entry1[0] > entry2[0]) return -1; // it's important for reverse order 
            else return 0;
        } else return entry1[1] - entry2[1];
    };

    let heap = new MinBinaryHeap(comparator); // O(K) S, but K <= N

    // NLog(K) T
    for (let entry of hashMap.entries()) {
        heap.add(entry);
        if (heap.size() > k) heap.remove();
    }

    let maxHeap = new MaxBinaryHeap(comparator, heap.arr); // O(N) T, O(K) S
    let result = []; // we can avoid additional arr if use heapsort

    // O(KLog(K)) T
    while (maxHeap.size() > 0) {
        result.push(maxHeap.remove()[0]);
    }

    return result;
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
            isSecondChildExist && this.greater(firstChildIdx, firstChildIdx + 1)
                ? firstChildIdx + 1
                : firstChildIdx;

        return smallerChildIdx;
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
module.exports = topKFrequent;
