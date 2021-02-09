// O(N) T, O(1) S
function removeValue(head, value) {
    let current = head;
    let prev = null;

    while (current) {
        if (current.value === value) {
            if (current === head) {
                head = head.next;// we need to delete head
            } else {
                prev.next = current.next;
                current = current.next;
                continue;// we want to keep prev as it is
            }
        }

        prev = current;
        current = current.next;
    }

    return head;
}

module.exports = removeValue;