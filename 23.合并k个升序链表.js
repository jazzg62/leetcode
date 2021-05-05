/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    function min_of_list(list){
        if(list.length ==0){
            return null;
        }
        var res;
        var resI;
        for(var i in list){
            if(res == undefined && list[i]){
                res = list[i];
                resI = i;
                continue;
            }
            if(res.val>list[i].val){
                res = list[i];
                resI = i;
                continue ;
            }
        }
        if(res == null){
            return null;
        }
        list[resI] = list[resI].next;
        return res;
    }


    var head=null;
    var p=null;
    var min_of_list_val;
    while(true){
        min_of_list_val = min_of_list(lists);
        if(min_of_list_val == null){
            break;
        }
        if(head == null){
            head = min_of_list_val;
            head.next = p;
            break;
        }
        p = min_of_list_val;
        p = p.next;
    }
    return head;
};
// @lc code=end

