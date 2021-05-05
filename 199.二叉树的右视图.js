/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    var res = [];
    var dd = function(node,depth){
        if(node == null)
            return null;
        if(res[depth]==undefined)
            res[depth] = node.val;
        arguments.callee(root.right, depth+1);
        arguments.callee(root.left, depth+1);
    }
    dd(root, 0);
    return res;
};
// @lc code=end
