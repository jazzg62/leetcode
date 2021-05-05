/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var iter = function(treeNode, arr, str){
        var _str = str;
        if(_str == ''){
            _str = treeNode.val+'';
        }else{
            _str = _str+'->'+treeNode.val;
        }

        if(treeNode.left == null && treeNode.right == null){
            arr.push(_str);
            return ;
        }
        if(treeNode.left !=null){
            arguments.callee(treeNode.left, arr, _str);
        }
        if(treeNode.right != null){
            arguments.callee(treeNode.right, arr, _str);
        }
    }
    if(root == null){
        return [];
    }
    var res = [];
    iter(root, res, '');
    return res;
};
// @lc code=end

