/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    var res =[];
    var dd = function(node){
        if(node == null){
            return ;
        }
        res.push(typeof node);
        arguments.callee(node.left);
        arguments.callee(node.right);
    }
    dd(root);
    console.log(res);
    // dd(root);
    // return res.join('');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

