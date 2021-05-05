/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    // 1 2 2 3 3 =》 1
    if(head ==null){
        return null;
    }
    var p=head;
    var setHead = false;
    while(p){
        if(p.next){
            if(p.val === p.next.val){
                p=p.next;
            }else if(!setHead){
                head = p;
            }
        }
        p=p.next;
    }
    return head;
};
// @lc code=end

