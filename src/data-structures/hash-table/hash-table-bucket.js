const Node = require('./node');
const HashTableBase = require('./hash-table-base');

class HashTable extends HashTableBase {
    constructor() {
        super();
        this.size = 19; // size should be managed dynamically to maintain invariant size ~ N / 5
        this.arr = new Array(this.size);
    }

    get(key) {
        let index = this.getIndex(key);
        let node = this.arr[index];

        while (node) {
            if (node.key === key) return node.value;
            
            node = node.next;
        }

        return null
    }

    put(key, value) {
        let index = this.getIndex(key);

        let node = this.arr[index];
        while (node) {
            if (node.key === key) {
                node.value = value;
                return;
            }
            node = node.next;
        }

        this.arr[index] = new Node(key, value, this.arr[index]);
        this.N++;
    }
}

module.exports = HashTable;
