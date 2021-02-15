const Queue = require('./../../data-structures/queue/queue');

class MovingAverage {
    constructor(size) {
        this.size = size;
        this.queue = new Queue();
        this.total = 0; // total needed to improve time complexity of average calculation
    }

    next(value) {
        this.queue.enqueue(value);
        this.total += value;

        while (this.queue.length > this.size) {
            this.total -= this.queue.dequeue();
        }

        const average = +(this.total / this.queue.length).toFixed(2);
        
        return average;
    }
}

module.exports = MovingAverage;