const ListNode = require('./linked-list-node');

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    setHead(value) {
        const node = new ListNode(value);

        node.next = this.head;

        this.head = node;
    }
}

module.exports = LinkedList;