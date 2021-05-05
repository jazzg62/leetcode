/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var list = new Array(nums.length+1);
    list.fill(0);
    for(var i of nums){
        list[i]++;
    }
    var res = [];
    for(var i = 1;i<list.length;i++){
        if(list[i]==0){
            res.push(i)
        }
    }
    return res;
};
// @lc code=end

