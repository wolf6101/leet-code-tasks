class Node {
    constructor(key, value, next) {
        this.key = key;
        this.value = value;
        this.next = next || null;
    }
}

module.exports = Node;