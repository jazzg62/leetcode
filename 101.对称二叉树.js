/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    var list1  = [];
    var list2 = [];
    var bl = function(node){
        if(node == null){
            return node;
        }
        list1.push(node.val);
        arguments.callee(node.left);
        arguments.callee(node.right);
        list2.push(node.val);
    }
    bl(root);
    console.log(list1);
    console.log(list2);
    var length = list1.length-1;
    for(var i in list1){
        if(list1[i] != list2[length-i]){
            return false;
        }
    }
    return true;
};
// @lc code=end
