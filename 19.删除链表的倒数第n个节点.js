/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var getListNodeLength = function(head){
        var res= 0;
        var p=head;
        while(p){
            res++;
            p = p.next;
        }
        return res;
    }
    var length = getListNodeLength(head);
    var target = length - n ;
    if(target == 0){
        return head.next;
    }
    var cnt =0;
    var p = head;
    while(p){
        cnt++;
        if(cnt == target){
            p.next = p.next.next;
            // console.log(cnt, p.val);
            // if(p.next!=null){
            //     p.val = p.next.val;
            //     p.next = p.next.next;
            // }else{
            //     p = null;
            // }
            break;
        }
        p=p.next;
    }
    return head;
};
// @lc code=end

