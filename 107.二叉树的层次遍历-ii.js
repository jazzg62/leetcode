/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = [];
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let levelOrderBottom = function (root) {
    if(!root){
        return [];
    }
    var reverseArray = function (arr){
        var res=  [];
        while(arr.length){
            res.push(arr.pop());
        }
        return res;
    }
    var queue = new Array();
    var res = new Array();
    res.push([root.val]);
    queue.push(root);
    var i=0;
    while(queue.length){
        var length = queue.length;
        var res_= new Array();
        for(;i<length;i++) {
            if(queue[i].left){
                queue.push(queue[i].left);
                res_.push(queue[i].left.val);
            }
            if(queue[i].right){
                queue.push(queue[i].right);
                res_.push(queue[i].right.val);
            }
        }
        if(res_.length == 0){
            break;
        }
        res.push(res_);
    }
    return reverseArray(res);
};
// @lc code=end