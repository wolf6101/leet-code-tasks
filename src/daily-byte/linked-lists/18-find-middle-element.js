function findMiddleElement(head) {
    if (!head) return '';

    let count = 0;
    let current = head;

    while (current) {
        count++;
        current = current.next;    
    }

    const middle = count % 2 == 0 
        ? 0.5 * count + 1 
        : Math.ceil(0.5 * count);

    current = head;
    count = 0;

    while (current) {
        count++;

        if (count === middle)
            return current.value;

        current = current.next;
    }

    return '';
}

module.exports = findMiddleElement;