function removeAdjacentDuplicates(str) {
    let stack = [];

    for (let char of str) {
        if (stack[stack.length - 1] !== char) {
            stack.push(char);
        } else {
            stack.pop();
        }
    }

    return stack.join('');
}

module.exports = removeAdjacentDuplicates;