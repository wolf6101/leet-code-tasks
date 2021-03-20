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

    sink() {
        throw Error('Not Implemented Exception');
    }

    swim() {
        throw Error('Not Implemented Exception');
    }

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

module.exports = BinaryHeap;