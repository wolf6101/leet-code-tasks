const Node = require('./linked-list-node');

const range = (start, stop, step) => {
    return Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + i * step
    );
}

const getLinkedList = (arr) => {
    let head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }

    return head;
}

const getArrayFromLinkedList = (head) => {
    const result = [];
    if (!head) return result;

    let current = head;

    while (current) {
        result.push(current.value);
        current = current.next;
    }

    return result;
}

module.exports.range = range;
module.exports.getLinkedList = getLinkedList;
module.exports.getArrayFromLinkedList = getArrayFromLinkedList;
