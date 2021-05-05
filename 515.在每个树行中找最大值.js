/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function(root) {
    var queue = new Array();
    var temp ;
    var max ;
    var res = new Array();
    if(root == null) return [];
    queue.push(root);
    while(queue.length){
        temp = new Array();
        for(var i= 0;i<queue.length;i++){
            if(i==0){
                max  = queue[i].val;
            }else{
                max = Math.max(max, queue[i].val);
            }
            if(queue[i].left){
                temp.push(queue[i].left);
            }
            if(queue[i].right){
                temp.push(queue[i].right);
            }
        }
        res.push(max);
        queue = temp;
    }
    return res;
};
// @lc code=end

