/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 */
var countNodes = function(root) {
    var res = 0;
    var depth = 0;
    var dh = function(node){
        if(node == null)
            return ;
        depth++;
        arguments.callee(node.left);
    }
    var dd = function(node){
        if(node == null)
            return null;
        res++;
        arguments.callee(node.left);
        arguments.callee(node.right);
    }
    dh(root); // 求深度
    res+= 2**(depth-1)-1;
    dd(root);
    return res;
};
// @lc code=end
