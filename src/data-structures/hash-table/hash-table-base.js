const Node = require('./node');

class HashTableBase {
    constructor() {
        this.size;
        this.N = 0; // number of elements in hash table
    }

    getHashCode(key) {
        let hash = 0;
        for (let char of key) {
            hash = char.charCodeAt(0) + 31 * hash;
        }

        return hash;
    }

    getIndex(key) {
        let hash = Math.abs(this.getHashCode(key));
        let index = hash % this.size;
        return index;
    }

    get(key) {
        throw('Not Implemented Exception');
    }

    put(key, value) {
        throw('Not Implemented Exception');
    }
}

module.exports = HashTableBase;
