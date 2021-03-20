class MaxBinaryHeap {
    constructor() {
        this.arr = [NaN]; // 1 based array
        this.length = 0;
    }

    add(key) {
        this.arr.push(key);
        this.length++;
        this.swim(this.length);
    }

    removeMax() {
        let max = this.arr[1];
        this.swap(1, this.length); // 1 is max element
        this.arr[this.length] = null;
        this.length--;
        this.sink(1);

        return max;
    }

    // O(log(N))
    swim(index) {
        let parentIdx = this.getParentIdx(index);

        while (parentIdx >= 1 && this.arr[index] > this.arr[parentIdx]) {
            this.swap(parentIdx, index);
            index = parentIdx;
            parentIdx = this.getParentIdx(index);
        }
    }

    // O(log(N))
    sink(index) {
        let gtChildIdx = this.getGreaterChildIdx(index);

        while (gtChildIdx && this.arr[index] < this.arr[gtChildIdx]) {
            this.swap(index, gtChildIdx);
            index = gtChildIdx;
            gtChildIdx = this.getGreaterChildIdx(index);
        }
    }

    getGreaterChildIdx(index) {
        let childIdx = index * 2;

        if (childIdx > this.length) return null;

        if (childIdx < this.length && this.arr[childIdx] < this.arr[childIdx + 1]) {
            childIdx++;
        }
        
        return childIdx;
    }

    getParentIdx(index) {
        let result = Math.floor(index / 2);
        return result;
    }

    swap(i, j) {
        let tmp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = tmp;
    }
}

module.exports = MaxBinaryHeap;
// mistakes:
// 1. on line 49 had a wrong check if (!this.arr[2*index]) but this is wrong because value can be 0, it should be  if (!this.arr[2*index] === undefined) instead