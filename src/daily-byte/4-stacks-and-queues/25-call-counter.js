const Queue = require("../../data-structures/queue/queue");
const QueueNode = require("../../data-structures/queue/queue-node");

class CallCounter {
    constructor() {
        this.queue = new Queue();
    }

    ping(timestamp) {
        this.queue.enqueue(timestamp)
        
        while (timestamp - this.queue.peek() > 3000 || this.queue.length > 3) {
            this.queue.dequeue();
        }

        return this.queue.length;
    }
}

module.exports = CallCounter;
