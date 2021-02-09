// O(N) T, O(N) S
function compareKeyStrokes(str1, str2) {
    let arr1 = convertKeyStrokesToArr(str1);
    let arr2 = convertKeyStrokesToArr(str2);

    if (arr1.length !== arr2.length) return false;

    // O(N) T
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }

    return true;
}

// O(N) T, O(N) S
function convertKeyStrokesToArr(str) {
    let stack = [];

    for (let char of str) {
        if (char === '#') {
            if (stack.length) {
                stack.pop();
            }
        } else {
            stack.push(char);
        }
    }

    return stack;
}

module.exports = compareKeyStrokes;
// mistakes:
// 1. wrong comparison on line 21. if (char === # && stack.length) led to pushing # to stack. Didn't noticed during debug