const WeightedQuickUnion = require('./weighted-quick-union');

class WeightedQuickUnionWithCompression extends WeightedQuickUnion {
    constructor(size) {
        super(size);
    }

    // todo: write unit tests on revision week
    getRoot(i) {
        while (this.arr[i] !== i) {
            i = this.arr[i];
            this.arr[i] = this.arr[this.arr[i]]; // setting each node to point to its parent, halving total path
        }
        return i;
    }
}

module.exports = WeightedQuickUnionWithCompression;
