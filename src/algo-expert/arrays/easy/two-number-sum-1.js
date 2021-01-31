// brute force implementation
// o(n^2) T, o(1) S
function twoNumberSum(array, targetSum) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === targetSum) {
                return [array[i], array[j]];
            }
        }
    }

    return [];
}

module.exports = twoNumberSum;
