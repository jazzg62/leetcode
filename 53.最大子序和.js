/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var res = -Number.MAX_VALUE;
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum = sum<0?0:sum;
        sum += nums[i];
        if(res<sum){
            res = sum;
        }
    }
    return res;
};
// @lc code=end