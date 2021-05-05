/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小移动次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    var t= new Set(nums);
    nums = [];
    for(var i of t)
        nums.push(i);
    var max_num = 0;
    for(var i in nums){
        if(i == 0){
            max_num = nums[i];
        }
        max_num = Math.max(max_num, nums[i]);
    }
    var res = 0;
    for(var i in nums){
        res+= max_num-nums[i];
    }
    return res;
};
// @lc code=end
// console.log(minMoves([-1000000000,-1000000000]));