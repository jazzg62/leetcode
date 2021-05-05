/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function(root) {
    if(!root)
        return false;
    var a=true,b=true;
    if(root.left){
        a = root.left.val<root.val && arguments.callee(root.left);
    }
    if(root.right){
        b= root.right.val>root.val && arguments.callee(root.right);
    }
    return a&&b;
};
// @lc code=end

