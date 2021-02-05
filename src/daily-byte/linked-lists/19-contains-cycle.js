// O(N) T | O(N) S
function containsLoop(head) {
    let hashMap = {};
    let current = head;

    while (current) {
        if (hashMap[current.value] && hashMap[current.value] === current) {
            return true;
        } else {
            hashMap[current.value] = current;
            current = current.next;
        }
    }

    return false;
}

module.exports = containsLoop;