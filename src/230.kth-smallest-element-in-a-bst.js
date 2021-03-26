/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if (!root) return null;

    return traverse(root, k, {counter: 0});
};

// O(K) T, O(K) S - because of recursion
function traverse(root, k, counter) {
    if (root.left) {
        var result = traverse(root.left, k, counter);
        if (result) return result;
    }
    
    counter.counter++;
    
    if (counter.counter === k) return root.val;
    if (root.right) {
        result = traverse(root.right, k, counter);
        if (result) return result;
    }

    return null;
}
// @lc code=end

module.exports = kthSmallest;