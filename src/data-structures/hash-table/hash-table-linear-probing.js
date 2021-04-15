const HashTableBase = require('./hash-table-base');
const Node = require('./node');

class HashTable extends HashTableBase {
    constructor() {
        super();
        this.size = 100; // size should be maintained at least 2N
        this.keys = new Array(this.size);
        this.values = new Array(this.size);
    }

    get(key) {
        let index = this.getIndex(key);

        for (index; this.keys[index] != null; index = (index + 1) % this.size) {
            if (this.keys[index] === key) {
                return this.values[index];
            }
        }

        return null;
    }

    put(key, value) {
        let index = this.getIndex(key);

        // i = (i + 1) % this.size - to wrap around array
        for (index; this.keys[index] != null; index = (index + 1) % this.size) {
            if (this.keys[index] === key) {
                this.values[index] = value;
                return;
            }
        }

        this.keys[index] = key;
        this.values[index] = value;
        this.N++;
    }
}

module.exports = HashTable;
