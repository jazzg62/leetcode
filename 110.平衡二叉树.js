/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function(root) {
    if(!root){
        return true;
    }
    var treeDepth= function(root, depth){
        if(!root){
            return depth;
        }
        let left, right;
        left=right=0;
        if(root.left){
            left = arguments.callee(root.left, depth);
        }
        if(root.right){
            right = arguments.callee(root.right, depth);
        }
        return Math.max(left, right, depth)+1;
    }
    return Math.abs(treeDepth(root.left, 0) - treeDepth(root.right, 0))<2;
};
// @lc code=end

