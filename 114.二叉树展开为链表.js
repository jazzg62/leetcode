/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    var head =  null;
    var p = head;
    var dd = function(node){
        if(node == null){
            return ;
        }
        if(head==null){
            head = node;
            p=head;
        }else{
            p.next=node;
            p=p.next;
        }
        arguments.callee(node.left);
        arguments.callee(node.right);
    }
    dd(root);
    return head;
};
// @lc code=end
