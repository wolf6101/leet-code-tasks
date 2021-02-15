const QueueNode = require("./queue-node");

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(value) {
        const node = new QueueNode(value);
        if (!this.head) {
            this.head = node;
        }
        if (this.tail) {
            this.tail.prev = node;
        }
        this.tail = node;
        this.length++;
    }

    dequeue() {
        let dequeuedVal = null;

        if (this.head) {
            dequeuedVal = this.head.value;
            this.head = this.head.prev;
            this.length--;
        }

        return dequeuedVal;
    }

    peek() {
        if (this.head) {
            return this.head.value;
        }

        return null;
    }
}

module.exports = Queue;
