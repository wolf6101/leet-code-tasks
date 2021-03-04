/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// O (NLog(N)) T, O(N) S
var merge = function(intervals) {
    let sortedIntervals = intervals.sort((a, b) => a[0] - b[0]); // O(NLog(N))
    let stack = [];

    for (let i = 0; i < sortedIntervals.length; i++) {
        let curr = sortedIntervals[i];
        
        if (stack[stack.length - 1] && stack[stack.length - 1][1] >= curr[0]) {
            let prev = stack.pop();

            stack.push([prev[0], Math.max(prev[1], curr[1])]); // max needed for case [[1,5],[2,4]]
        } else {
            stack.push(curr);
        }
    }

    return stack;
};
// possible improvement is to have while inside for to merge few intervals all together
// @lc code=end

module.exports = merge;