/*
 * @lc app=leetcode id=912 lang=javascript
 *
 * [912] Sort an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    if (!nums || !nums.length) return nums;

    let input = { arr: nums };

    sort(input, 0, nums.length - 1);
    return input.arr;
};

function sort(input, left, right) {
    if (left >= right) return;

    let pivotIdx = partition(input, left, right);

    sort(input, left, pivotIdx - 1);
    sort(input, pivotIdx + 1, right);
}

function partition(input, left, right) {
    let pivot = input.arr[left];
    let leftPtr = left + 1;
    let rightPtr = right;

    while (leftPtr <= rightPtr) {
        while (input.arr[leftPtr] <= pivot) {
            leftPtr++;
        }

        while (input.arr[rightPtr] > pivot) {
            rightPtr--;
        }

        if (leftPtr < rightPtr) {
            swap(input, leftPtr, rightPtr);
        }
    }

    swap(input, left, rightPtr);

    return rightPtr;
}

function swap(input, i, j) {
    const temp = input.arr[i];
    input.arr[i] = input.arr[j];
    input.arr[j] = temp;
}

module.exports = sortArray;
// @lc code=end
