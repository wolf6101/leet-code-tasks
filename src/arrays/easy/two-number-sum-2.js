// sorted array two pointers traversal based implementation
// o(N*log(N))
function twoNumberSum(array, targetSum) {
    let sortedArray = array.sort((a, b) => a - b); //o(n*log(n))
    let left = 0;
    let right = sortedArray.length;

    //o(n)
    while (left < right) {
        let currentSum = sortedArray[left] + sortedArray[right];
        if (currentSum === targetSum) {
            return [sortedArray[left], sortedArray[right]];
        } else if (currentSum < targetSum) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

module.exports = twoNumberSum;
