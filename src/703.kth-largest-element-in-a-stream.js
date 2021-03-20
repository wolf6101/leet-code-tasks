/*
 * @lc app=leetcode id=703 lang=javascript
 *
 * [703] Kth Largest Element in a Stream
 */
// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    let comparator = (i, j) => i - j;
    this.heap = new MinBinaryHeap(comparator);
    this.k = k;

    // O(NLog(K)) T, O(K) S
    for (let num of nums) {
        this.heap.add(num);
        if (this.heap.size() > k) {
            this.heap.remove();
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.add(val); // O(Log(K)) T
    if (this.heap.size() > this.k) {
        this.heap.remove(); // O(Log(K))
    }

    return this.heap.peek();
};


/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

 function MinBinaryHeap(compare, arr) {
    this.compare = compare;

    this.arr = [];

    if (arr) {
        this.buildHeap(arr);
    }
}

MinBinaryHeap.prototype = {
    ...MinBinaryHeap.prototype,
    // O(log(N)) T
    sink: function(i) {
        let gtChildIdx = this.getSmallerChildIndex(i);

        while (gtChildIdx && this.greater(i, gtChildIdx)) {
            this.swap(i, gtChildIdx);
            i = gtChildIdx;
            gtChildIdx = this.getSmallerChildIndex(i);
        }
    },

    // O(log(N)) T
    swim: function(i) {
        let parentIdx = this.getParentIdx(i);

        while (parentIdx >= 0 && this.greater(parentIdx, i)) {
            this.swap(i, parentIdx);
            i = parentIdx;
            parentIdx = this.getParentIdx(i);
        }
    },

    greater: function(i, j) {
        let result = this.compare(this.arr[i], this.arr[j]) > 0;
        return result;
    },

    getSmallerChildIndex: function(i) {
        let firstChildIdx = 2 * i + 1;

        if (firstChildIdx > this.arr.length - 1) return null;

        let isSecondChildExist = firstChildIdx + 1 < this.arr.length;

        let smallerChildIdx =
            isSecondChildExist &&
            this.greater(firstChildIdx, firstChildIdx + 1)
                ? firstChildIdx + 1
                : firstChildIdx;

        return smallerChildIdx;
    },

    // O(N) T
    buildHeap: function(arr) {
        this.arr = [];

        for (let item of arr) {
            this.arr.push(item);
        }

        let lastParentIdx = this.getParentIdx(this.arr.length - 1);

        for (let i = lastParentIdx; i >= 0; i--) {
            this.sink(i);
        }
    },

    add: function(val) {
        this.arr.push(val);
        this.swim(this.arr.length - 1);
    },

    remove: function() {
        let top = this.arr[0];
        this.swap(0, this.arr.length - 1);
        this.arr.pop();
        this.sink(0);

        return top;
    },

    peek: function() {
        return this.arr[0];
    },

    size: function() {
        return this.arr.length;
    },

    getParentIdx: function(i) {
        let parentIdx = Math.floor((i - 1) / 2);
        return parentIdx;
    },

    swap: function(i, j) {
        let tmp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = tmp;
    }
};

// @lc code=end

module.exports = KthLargest;