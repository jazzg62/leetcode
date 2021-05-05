/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p&&!q && p === q){
        return true;
    }
    if(!p){
        return false;
    }
    if(!q){
        return false;
    }
    var a = p.val;
    var b = q.val;
    return a===b && arguments.callee(p.left, q.left) && arguments.callee(p.right, q.right);
};
// @lc code=end

