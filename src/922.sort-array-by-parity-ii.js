/*
 * @lc app=leetcode id=922 lang=javascript
 *
 * [922] Sort Array By Parity II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
    const unsortedOddsIdxs = [];
    const unsortedEvensIdxs = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (!isEven(num) && isEven(i)) {
            if (unsortedEvensIdxs.length !== 0) {
                swap(nums, i, unsortedEvensIdxs.pop());
            } else {
                unsortedOddsIdxs.push(i);
            }
        } else if (isEven(num) && !isEven(i)) {
            if (unsortedOddsIdxs.length !== 0) {
                swap(nums, i, unsortedOddsIdxs.pop());
            } else {
                unsortedEvensIdxs.push(i);
            }
        }
    }

    return nums;
};

function isEven (num) {
    return num % 2 === 0;
}

function swap (arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

// @lc code=end
