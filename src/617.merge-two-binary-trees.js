/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
 */

const TreeNode = require('./data-structures/tree/tree-node');

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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    if (!root1 && root2) return root2;
    else if (root1 && !root2) return root1;
    else if (!root1 && !root2) return null;

    merge(root1, root2);
    return root1;
};

// O(N) T
// O(N) S
function merge(root1, root2) {
    if (root1 && root2) {
        root1.val += root2.val;
    }

    if (!root1.left && root2.left) {
        root1.left = new TreeNode();
    } else if (root1.left && !root2.left) {
        root2.left = new TreeNode();
    }

    if (root1.left && root2.left) {
        merge(root1.left, root2.left);
    }

    if (!root1.right && root2.right) {
        root1.right = new TreeNode();
    } else if (root1.right && !root2.right) {
        root2.right = new TreeNode();
    }
    
    if (root1.right && root2.right) {
        merge(root1.right, root2.right);
    }
}
// @lc code=end

// mistakes forgot to add edge case check when there are null input [], [1]
// didn't take into account case when both nodes exist but both don't have children
// did a mistake checking if (a), when a can be 0
// so plenty of mistakes due to not considering edge cases