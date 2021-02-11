// TODO: review this task in a while as solution is not my own
function greaterElements(arr1, arr2) {
    let map = {}; // for storing greater elements
    let stack = []; // for storing previously visited numbers
    let result = [];

    // max O(2N)
    for (let num of arr2) {
        while (stack.length && stack[stack.length - 1] < num) {
            map[stack.pop()] = num;
        }

        stack.push(num);
    }

    // o(N)
    for (let num of arr1) {
        if (map[num] !== undefined) {
            result.push(map[num]);
        } else {
            result.push(-1);
        }
    }
    
    return result;
}

module.exports = greaterElements;