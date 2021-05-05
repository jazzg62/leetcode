/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (!root) {
        return false;
    }
    var iter = function (root, val, target) {
        if (!root) {
            return val == target;
        }
        val = val + root.val;
        if (val == target) {
            return true;
        }
        return (
            (root.left && iter(root.left, val)) ||
            (root.right && iter(root.right, val))
        );
    };
    return !!iter(root, 0, sum);
};
// @lc code=end