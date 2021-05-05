/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(l1 == null){
        return l2;
    }
    if(l2 == null){
        return l1;
    }
    var node = null;
    var p = null;
    var head = null;
    var last=0;
    var a,b;

    //  1,2,3 ,   1 8 2
    while(true){
        if(l1 ==null && l2 == null &&last ==0){
            break;
        }
        a = l1?l1.val : 0;
        b = l2?l2.val : 0;

        node  = new ListNode(a+b+last);
        if(node.val >=10){
            node.val = node.val-10;
            last =1;
        }else{
            last = 0;
        }
        if(!head){
            head = node;
            p = head;
        }else{
            p.next = node;
            p=node;
        }
        l1 = l1?l1.next:null;
        l2 = l2?l2.next:null;
    }
    return head;
};
// @lc code=end

