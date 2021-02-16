const QuickUnion = require('./quick-union');

class WeightedQuickUnion extends QuickUnion {
    constructor(size) {
        // not perfect as we can initialize in single loop, but for the sake of this example - inheritance
        // will make it clearer how these 2 classes differ from each other
        super(size);

        this.sizes = [];

        for (let i = 0; i < size; i++) {
            this.sizes[i] = 1;
        }
    }

    connect(p, q) {
        const pRoot = this.getRoot(p);
        const qRoot = this.getRoot(q);

        if (pRoot !== qRoot) {
            // always adding shorter tree under longer one
            if (this.sizes[pRoot] > this.sizes[qRoot]) {
                this.arr[qRoot] = pRoot;
                this.sizes[pRoot] += this.sizes[qRoot];
            } else {
                this.arr[pRoot] = qRoot;
                this.sizes[qRoot] += this.sizes[pRoot];
            }
        }
    }
}

module.exports = WeightedQuickUnion;