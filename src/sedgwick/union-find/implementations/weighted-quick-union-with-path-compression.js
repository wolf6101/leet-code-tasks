const WeightedQuickUnion = require('./weighted-quick-union');

class WeightedQuickUnionWithCompression extends WeightedQuickUnion {
    constructor(size) {
        super(size);
    }

    // todo: write unit tests on revision week
    // another approach is to find root node and then have separate loop to set each node to point to the root
    getRoot(i) {
        while (this.arr[i] !== i) {
            this.arr[i] = this.arr[this.arr[i]]; // setting each node to point to its parent, halving total path
            i = this.arr[i];
        }
        return i;
    }
}

module.exports = WeightedQuickUnionWithCompression;
