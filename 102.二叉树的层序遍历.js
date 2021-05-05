/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return [];
    }
    var queue = new Array();
    var res = new Array();
    res.push([root.val]);
    queue.push(root);
    var i = 0;
    while(i<queue.length){
        var length = queue.length;
        var res1 = new Array();
        for(;i<length;i++){
            if(queue[i].left){
                queue.push(queue[i].left);
                res1.push(queue[i].left.val);
            }
            if(queue[i].right){
                queue.push(queue[i].right);
                res1.push(queue[i].right.val);
            }
        }
        if(res1.length!=0)
            res.push(res1);
    }
    return res; 
};
// @lc code=end

