/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
    var res = [];
    var dd = function(node){
        if(node == null){
            return null;
        }
        res.push(node.val);
        arguments.callee(node.left);
        arguments.callee(node.right);
    }
    dd(root);
    return res;
};
// @lc code=end

