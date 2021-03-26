/*
 * @lc app=leetcode id=1038 lang=javascript
 *
 * [1038] Binary Search Tree to Greater Sum Tree
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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    if (!root) return null;
    createGreaterSumTree(root, {acc: 0});
    return root;
};

// O(N) T, O(N) S due to recursive impl ???
function createGreaterSumTree(node, acc) {
    if (node.right) {
        createGreaterSumTree(node.right, acc);
    }

    acc.acc += node.val;
    node.val = acc.acc;

    if (node.left) {
        createGreaterSumTree(node.left, acc);
    }
}
// @lc code=end

module.exports = bstToGst;