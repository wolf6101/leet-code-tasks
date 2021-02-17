// O(log(N)) T, O(1) S
function getLowestCommonAncestor(root, a, b) {
    // 1. if current >= a && current <= b || current <= a && current >= b -> return current
    // 2. else if current < a && current < b -> current = current.right
    // 3. else if current > a && current > b -> current = current.left
    let current = root;

    while (!isParent(current, a, b)) {
        if (current.value < a.value && current.value < b.value) {
            current = current.right;
        } else if (current.value > a.value && current.value > b.value) {
            current = current.left;
        }
    }

    return current;
}

function isParent(node, a, b) {
    const result =
        (node.value >= a.value && node.value <= b.value) ||
        (node.value <= a.value && node.value >= b.value);

    return result;
}

module.exports = getLowestCommonAncestor;
