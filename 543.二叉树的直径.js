/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    var max = 0;
    var iter = function (root) {
        if (root == null) return 0;
        var left, right;
        left = right = 0;
        if (root.left) {
            left = 1 + iter(root.left);
        }
        if (root.right) {
            right = 1 + iter(root.right);
        }
        return Math.max(left, right);
    };
    var left, right;
    left = right = 0;
    if (root == null) {
        return 0;
    }
    if (root.left) {
        left = 1 + iter(root.left);
    }
    if (root.right) {
        right = 1 + iter(root.right);
    }
    return left + right;
};
// @lc code=end
