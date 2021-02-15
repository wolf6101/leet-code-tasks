// assumption: all values in tree are unique
// O(log(N)) T, O(log(N)) S
function findValue(node, value) {
    if (!node) return null;

    if (value === node.value) {
        return node;
    } else if (value < node.value) {
        return findValue(node.left, value);
    } else if (value > node.value) {
        return findValue(node.right, value);
    }
}

module.exports = findValue;
