const Node = require('./linked-list-node');

const range = (start, stop, step) => {
    return Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + i * step
    );
}

const getLinkedList = (arr) => {
    if (!arr || !arr.length)
        return null;

    let head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }

    return head;
}

const getLinkedListWithLoop = (arr) => {
    if (!arr || !arr.length)
        return null;

    const hashMap = {};
    let head = new Node(arr[0]);
    hashMap[arr[0]] = head;
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        if (hashMap[arr[i]]) {
            current.next = hashMap[arr[i]];
            return head; // to avoid rewrites
        } else {
            current.next = new Node(arr[i]);
            hashMap[arr[i]] = current.next;
        }

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
module.exports.getLinkedListWithLoop = getLinkedListWithLoop;

