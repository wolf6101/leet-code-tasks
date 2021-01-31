/*
This question is asked by Google. Given an array of integers, return whether or not two numbers sum to a given target, k.
Note: you may not sum a number with itself.
*/
// O(N) T, O(N) S
function twoSum(arr, sum) {
    let hashMap = {};

    for (let i = 0; i < arr.length; i++) {
        let remainder = sum - arr[i];

        if (hashMap[remainder]) {
            return true;
        } else {
            hashMap[arr[i]] = 1;
        }
    }

    return false;
}

module.exports = twoSum;