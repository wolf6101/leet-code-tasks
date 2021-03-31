/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (!root) return false;

    let min = -Infinity;
    let max = Infinity;

    return isValidSubtree(root, min, max);
};

/*
            5
          /   \
        4       6
      /       /   \
    1       3       7
*/
// // O(N) T, O(N) S

function isValidSubtree(node, min, max) {
    if(!node) return true;

    if (node.val <= min || node.val >= max) return false;

    return isValidSubtree(node.left, min, node.val) && isValidSubtree(node.right, node.val, max);
}
// @lc code=end

module.exports = isValidBST;

// mistakes: 
// 1. didn't check requirments, in my case tree is valid bst when left < parent, right > parent. no duplicates allowed
// 2. didn't check case when left is smaller than its parent, but has to be bigger than parent of parent