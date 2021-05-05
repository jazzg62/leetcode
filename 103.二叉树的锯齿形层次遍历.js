/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
var zigzagLevelOrder = function (root) {
    if (!root) return [];
    var queue = new Array();
    var res = new Array();
    res.push([root.val]);
    queue.push(root);
    var order = 0;
    while (queue.length) {
        let queue_ = new Array();
        let res_ = new Array();
        if (!order) {
            order = 1;
            for (var i = queue.length - 1; i >= 0; i--) {
                if (queue[i].right) {
                    queue_.push(queue[i].right);
                    res_.push(queue[i].right.val);
                }
                if (queue[i].left) {
                    queue_.push(queue[i].left);
                    res_.push(queue[i].left.val);
                }
            }
        } else {
            order = 0;
            for (var i = queue.length - 1; i >= 0; i--) {
                if (queue[i].left) {
                    queue_.push(queue[i].left);
                    res_.push(queue[i].left.val);
                }
                if (queue[i].right) {
                    queue_.push(queue[i].right);
                    res_.push(queue[i].right.val);
                }
            }
        }
        if(queue_.length == 0 ){
            break;
        }
        queue = queue_;
        res.push(res_);
    }
    return res;
};
// @lc code=end
