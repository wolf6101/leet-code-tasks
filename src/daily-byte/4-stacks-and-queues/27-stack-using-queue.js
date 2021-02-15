const Queue = require('../../data-structures/queue/queue');

class StackOnQueue {
    constructor() {
        this.queue = new Queue();
    }

    // O(N)
    // push 5 -> 5
    // push 4 -> 5 4
    // push 3 -> 5 4 3
    // push 2 -> 5 4 3 2
    // push 1 -> 5 4 3 2 1
    push(value) {
        this.queue.enqueue(value);

        while (this.queue.peek() !== value) {
            this.queue.enqueue(this.queue.dequeue());
        }
    }

    pop() {
        return this.queue.dequeue();
    }

    peek() {
        return this.queue.peek();
    }

    isEmpty() {
        return !(this.queue.length > 0);
    }

    get length() {
        return this.queue.length;
    }
}

module.exports = StackOnQueue;
