class QuickFind {
    constructor(size) {
        this.arr = [];
        for (let i = 0; i < size; i++) {
            this.arr.push(i);
        }
    }

    // O(1) T
    isConnected(p, q) {
        return this.arr[p] === this.arr[q];
    }

    // O(N) T
    connect(p, q) {
        const pVal = this.arr[p];
        const qVal = this.arr[q];

        if (pVal === qVal) return;

        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === pVal) {
                this.arr[i] = qVal;
            }
        }
    }

    // O(N) T, O(N) S
    getNumberOfComponents() {
        const set = new Set();

        for (let el of this.arr) {
            if (!set.has(el)) {
                set.add(el);
            }
        }

        return set.size;
    }
}

module.exports = QuickFind;
j