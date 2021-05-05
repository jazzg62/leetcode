/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function(root) {
    if(!root){
        return 0;
    }
    var sumL = 0;
    var sumR = 0;
    if(root.left){
        sumL = root.left.val+arguments.callee(root.left)
    }
    if(root.right){
        sumR = arguments.callee(root.right);
    }
    return sumL+sumR;
};
// @lc code=end

